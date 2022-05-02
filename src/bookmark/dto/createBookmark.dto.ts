import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsOptional()
  second_link?: string;

  @IsString()
  @IsOptional()
  third_link?: string;
}
