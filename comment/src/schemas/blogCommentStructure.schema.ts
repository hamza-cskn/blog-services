import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
export type BlogRegistryDocument = HydratedDocument<BlogCommentStructure>;

@Schema({versionKey: false}) //to do not include '__v' field.
export class BlogCommentStructure extends Document {

    @Prop()
    blogId: string;

    @Prop()
    comments: Comment[];

}

export const BlogCommentStructureSchema = SchemaFactory.createForClass(BlogCommentStructure);
