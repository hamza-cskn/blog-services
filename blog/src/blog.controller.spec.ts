import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

describe('AppController', () => {
  let appController: BlogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService],
    }).compile();

    appController = app.get<BlogController>(BlogController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {

    });
  });
});
