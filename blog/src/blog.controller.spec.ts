import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { Blog, BlogSchema } from './schemas/blog.schema';
import { BlogService } from './blog.service';
import {BlogDto, BlogDTOStub} from "./dto/blog.dto";

describe('BlogController', () => {
  let controller: BlogController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let model: Model<Blog>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    model = mongoConnection.model(Blog.name, BlogSchema);
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [
        BlogService,
        { provide: getModelToken(Blog.name), useValue: model },
      ],
    }).compile();
    controller = app.get<BlogController>(BlogController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe('post blog', () => {
    it('should return saved object', async () => {
      let result = await controller.create(BlogDTOStub());
      expect(result.title).toBe(BlogDTOStub().title);
      expect(result.content).toBe(BlogDTOStub().content);

    });
  });

  it('save & get blogs', async () => {
    await controller.create(BlogDTOStub());
    let result = await controller.findAll();
    expect(result.length).toBe(1);
    expect(result[0].title).toBe(BlogDTOStub().title);
  });
});
