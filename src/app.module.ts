import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module'; 
import { EmailsModule } from './modules/email/email.module';
import { CompanyModule } from './modules/company/company.module'; 
import { CategoriModule } from './modules/categories/categories.module'; 
import { PlaceModule } from './modules/places/places.module'; 

const ENV = process.env.NODE_ENV;


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env.local' : `.env.${ENV}`
    }),
    MongooseModule.forRoot(`mongodb+srv://simasoftw:HqcrnC4KeJmJiPTj@cluster0.m1lzn0k.mongodb.net/standard`), 
    EmailsModule,
    UsersModule, 
    AuthModule,
    PlaceModule,
    CompanyModule,
    CategoriModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
