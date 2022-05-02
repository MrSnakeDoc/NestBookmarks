import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: string, dto: EditUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: {
          ...dto,
        },
      });
      return new EditUserDto(user);
    } catch (error) {
      throw error;
    }
  }
}
