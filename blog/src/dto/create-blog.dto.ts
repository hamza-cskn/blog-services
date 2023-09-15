import { IsOptional, Length, MaxLength } from 'class-validator';

export class CreateBlogDto {
  @Length(1, 50)
  title: string;

  @MaxLength(100)
  @IsOptional()
  subtitle: string;

  @Length(1, 10_000)
  content: string;

  @MaxLength(32)
  author: string;

  @MaxLength(32)
  @IsOptional()
  theme: string;

  @MaxLength(16)
  @IsOptional()
  original_language: string;
}
