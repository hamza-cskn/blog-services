import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import { Prop } from '@nestjs/mongoose';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
  @Prop()
  id: string;

  @Prop()
  modifiedDate: Date;
}
