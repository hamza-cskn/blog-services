import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import {CommentService} from "./comment.service";
import {BlogCommentStructure, BlogCommentStructureSchema} from "./schemas/blogCommentStructure.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      MongooseModule.forRoot(process.env.MONGO_URI),
      MongooseModule.forFeature([{name: BlogCommentStructure.name, schema: BlogCommentStructureSchema}])
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}