import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Companies, CompaniesSchema } from './schema/company.schema';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports:[ 
        MongooseModule.forFeature([{ name: Companies.name, schema: CompaniesSchema }]),
    ],
    controllers: [CompanyController],
    providers: [CompanyService]

})
export class CompanyModule {}
