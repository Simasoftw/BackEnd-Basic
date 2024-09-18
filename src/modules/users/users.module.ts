import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Companies, CompaniesSchema } from '../company/schema/company.schema';
import { CompanyService } from '../company/company.service';


@Module({
    imports:[ 
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Companies.name, schema: CompaniesSchema }]),
    ],
    controllers: [UsersController],
    providers: [UsersService, CompanyService]
})
export class UsersModule {}
