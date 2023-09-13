import {Injectable} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BlogCommentStructure} from "./schemas/blogCommentStructure.schema";

@Injectable()
export class CommentService {

  constructor(@InjectModel(BlogCommentStructure.name) private readonly blogRegistryModel: Model<BlogCommentStructure>) {
  }

  async createComment(createCommentDto: CreateCommentDto, blogId: string) {
    const comment = CommentService.convertToComment(createCommentDto);
    if (await this.blogRegistryModel.find({_id: blogId}).count() === 0) {
      await this.blogRegistryModel.create(CommentService.convertToBlogCommentStructure(blogId, comment));
      return comment;
    }
    await this.blogRegistryModel.updateOne({_id: blogId}, {$push: {comments: comment}});
    return comment;
  }

  async createSubComment(createCommentDto: CreateCommentDto, blogId: string, parentId: string) {
    if (!this.blogRegistryModel.findById(parentId)) throw new Error('Parent comment not found');
    const comment = CommentService.convertToComment(createCommentDto);
    await this.blogRegistryModel.updateOne(
        {_id: blogId, "comments.id": parentId},
        {$push: {"comments.$.subComments": comment}});
    return comment;
  }

  async findSubComments(blogId: string, parentId: string) {
    const blogStruct = await this.blogRegistryModel.findById(blogId);
    return blogStruct.comments.find(comment => comment.id === parentId).subComments;
  }

  findAll(blogId: string) {
    return this.blogRegistryModel.findById(blogId)
        .then(blogRegistry => blogRegistry ? blogRegistry.comments : []);
  }

  findOne(blogId: string, commentId: string) {
    return this.blogRegistryModel
        .findById(blogId)
        .select('comments')
        .then(blogRegistry => {
          return blogRegistry.comments.find(comment => comment.id === commentId);
        });
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.blogRegistryModel.updateOne({_id: id}, updateCommentDto);
  }

  delete(id: string) {
    return this.blogRegistryModel.deleteOne({_id: id})
  }

  private static convertToBlogCommentStructure(blogId: string, comment) {
    return {
      _id: blogId,
      comments: [comment]
    }
  }

  private static convertToComment(createCommentDto: CreateCommentDto) {
    return {
      id: Date.now().toString(16),
      visible: true,
      writer: createCommentDto.writer,
      content: createCommentDto.content,
      createdDate: new Date(),
      subComments: []
    }
  }

}
