import { Injectable } from '@nestjs/common';
import { CompanyDTO } from './dtos/componey.dto';
import { Companies, CompaniesDocument } from './schema/company.schema';
import { Model, mongo } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CONSTANTS_STATUS } from 'src/shared/utils/status.constant';

@Injectable()
export class CompanyService {

    constructor(
        @InjectModel(Companies.name) private _companiesModel: Model<CompaniesDocument>,
    ){ }

    async createCompany(companyDTO: CompanyDTO):Promise<any> {

        try{

            companyDTO.status = CONSTANTS_STATUS.ACTIVE;
            companyDTO.name = "Principal";
            const response  = await new this._companiesModel(companyDTO);
            response.save();


            if(response){
                return {
                    data: response,
                    menssage: "Compañia creado con exito",
                    status: 200
                }
            }

        } catch( error) {
            return {
                data: [],
                menssage: error,
                status: 500
            }
        }

    }

}
