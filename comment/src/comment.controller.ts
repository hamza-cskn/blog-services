import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {CommentService} from "./comment.service";
import {TokenGuard} from "./token/token.guard";

@Controller('blogs/:blogId/comments')
export class CommentController {

  constructor(private readonly commentsService: CommentService) {
  }

  @UseGuards(TokenGuard)
  @Post()
  create(@Body() createCommentDto: CreateCommentDto,
         @Param('blogId') blogId: string) {
    return this.commentsService.createComment(createCommentDto, blogId);
  }

  @UseGuards(TokenGuard)
  @Post(':commentId')
  createSubComment(@Body() createCommentDto: CreateCommentDto,
                   @Param('blogId') blogId: string,
                   @Param('commentId') parentId: string) {
    return this.commentsService.createSubComment(createCommentDto, blogId, parentId);
  }

  @UseGuards(TokenGuard)
  @Get(':commentId')
  findSubComments(@Param('blogId') blogId: string,
                  @Param('commentId') parentId: string) {
    return this.commentsService.findSubComments(blogId, parentId);
  }

  @UseGuards(TokenGuard)
  @Get()
  findAll(@Param('blogId') blogId: string) {
    return this.commentsService.findAll(blogId);
  }

  @UseGuards(TokenGuard)
  @Get(':id')
  findOne(@Param('blogId') blogId: string,
          @Param('id') id: string) {
    return this.commentsService.findOne(blogId, id);
  }

  @UseGuards(TokenGuard)
  @Patch(':id')
  update(@Param('id') id: string,
         @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @UseGuards(TokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.delete(id);
  }
}
