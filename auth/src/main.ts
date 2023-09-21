import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.setGlobalPrefix('api/v1/');
  await app.listen(port);
}
bootstrap().then(() => console.log("Auth server started successfully at port", port));
