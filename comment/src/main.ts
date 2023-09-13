import { NestFactory } from '@nestjs/core';
import { CommentModule } from './comment.module';
import * as process from "process";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(CommentModule);
  app.setGlobalPrefix('api/v1/')
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
