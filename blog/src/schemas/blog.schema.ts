import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ versionKey: false }) //to do not include '__v' field.
export class Blog extends Document {
  @Prop()
  id: string;

  @Prop()
  visible: boolean;

  @Prop()
  title: string;

  @Prop()
  subtitle: string;

  @Prop()
  createdDate: Date;

  @Prop()
  modifiedDate: Date;

  @Prop()
  content: string;

  @Prop()
  theme: string;

  @Prop()
  author: string;

  @Prop()
  original_language: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
