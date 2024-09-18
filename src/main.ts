import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONSTANTS_UTIL } from './shared/utils/contants.util';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const configService = new ConfigService;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  const GW_PORT = configService.get(CONSTANTS_UTIL.GW_PORT);

  try {
    await mongoose.connect(`${process.env.DB_CNN}/${process.env.DB_NAME}`);
    Logger.log('Database connection successful', 'AppModule');
  } catch (error) {
    Logger.error(`Failed to connect to the database: ${error}`, '', 'DatabaseConnectionError');
  }

  await app.listen(3000, '0.0.0.0');

  Logger.log('PORT', 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
