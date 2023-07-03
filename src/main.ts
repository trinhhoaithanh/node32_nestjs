import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  //CORS
  app.use(express.static(".")); //định vị lại đường dẫn để load tài nguyên 
  await app.listen(3000);
}
bootstrap();

// user => controller, module, service

// food => controller, module, service

// module => nest g module user
// controller => nest g controller user --no-spec
// service => nest g service user  --no-spec

// cong_viec
// nest g resource congviec --no-spec

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate 