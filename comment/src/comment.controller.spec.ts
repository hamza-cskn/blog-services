import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

describe('BlogController', () => {
  let commentController: CommentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [CommentService],
    }).compile();

    commentController = app.get<CommentController>(CommentController);
  });

  describe('root', () => {

  });
});
