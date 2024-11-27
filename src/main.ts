import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:['log'],
  });
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    methods: "GET, PUT, POST, DELETE",
    allowedHeaders: "Content-Type,Authorization,X-Requested-With,Accept-Language",
    optionsSuccessStatus: 204,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
