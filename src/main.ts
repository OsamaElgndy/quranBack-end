<<<<<<< HEAD
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe(
    {
     whitelist:true,
     forbidNonWhitelisted:true,
     transform:true,
    }
  ));
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
=======
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe(
    {
     whitelist:true,
     forbidNonWhitelisted:true,
     transform:true,
    }
  ));
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
