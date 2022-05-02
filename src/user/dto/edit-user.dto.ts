import { Exclude } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstname?: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  pseudo?: string;

  @Exclude()
  @IsOptional()
  password?: string;

  constructor(partial: Partial<EditUserDto>) {
    Object.assign(this, partial);
  }
}
