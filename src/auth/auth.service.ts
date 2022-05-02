import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    try {
      //generate the password hash
      const hash = await argon.hash(dto.password);
      //save the user to the database
      const user = await this.prisma.user.create({
        data: { email: dto.email, password: hash },
      });
      //return the user
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials already in use');
        }
      }
      throw error;
    }
  }
  async signin(dto: AuthDto) {
    //find the user in the database
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
      //if the user is not found throw exception
      if (!user) {
        throw new ForbiddenException('Invalid credentials');
      }
      //compare password hash with the one in the database
      const pwMatches = await argon.verify(user.password, dto.password);
      //if the password is not correct throw exception
      if (!pwMatches) {
        throw new ForbiddenException('Invalid credentials');
      }
      //send back the user
      return this.signToken(user.id, user.email);
    } catch (error) {
      throw error;
    }
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret,
    });
    return {
      access_token: token,
    };
  }
}
