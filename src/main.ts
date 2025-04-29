import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000', 
      'https://horizontal-greta-osamaelgndy-b3a94cc6.koyeb.app',
      'https://neon-bavarois-ed555c.netlify.app' 
    ],
    credentials: true,
  });


  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(8000);
}
bootstrap();
