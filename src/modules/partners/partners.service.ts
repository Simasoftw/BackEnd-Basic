import { Injectable } from '@nestjs/common';
import { PartnerDTO } from './dtos/partners.dto';
import { Partners, PartnersDocument } from './schema/partners.schema';
import { Model, mongo } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CONSTANTS_STATUS } from 'src/shared/utils/status.constant';
import { IResponse } from 'src/shared/utils/IResponse.util';

@Injectable()
export class PartnerService {

    constructor(
        @InjectModel(Partners.name) private _partnersModel: Model<PartnersDocument>,
    ){ }

    async createPartner(partnersDTO: PartnerDTO):Promise<any> {

        try{

            partnersDTO.status = CONSTANTS_STATUS.ACTIVE; 
            const response  = await new this._partnersModel(partnersDTO);
            response.save(); 

            if(response){
                return {
                    data: response,
                    menssage: "Aliado creado con exito",
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
 

    async update(partnersDTO: PartnerDTO, idPartner): Promise<IResponse> {
        const response =  await this._partnersModel.findByIdAndUpdate(idPartner,
            partnersDTO, { new: true });
            if (response?._id) {
                return {
                    data: response,
                    menssage: "Partnera actualizada con exito",
                    status: 200
                }
            }else{
                return {
                    data: response,
                    menssage: "Partnera no encontrado",
                    status: 400
                }
            }
      
    }

    async delete(IdPartner: string): Promise<IResponse>{
        const response = await this._partnersModel.findByIdAndUpdate(IdPartner,
            {status: "INACTIVE"}, { new: true });;
        if (response?._id) {
            return {
                data: response,
                menssage: "Partnera eliminado con exito",
                status: 200
            }
        }else{
            return {
                data: response,
                menssage: "Partnera no encontrado",
                status: 400
            }
        }
       
    } 

    async filterPartnerByCompany(body: any): Promise<IResponse>{ 

        try {
            const response = await this._partnersModel.find({companyId: new mongo.ObjectId(body.companyId), status: "ACTIVE"});
    
            if (response.length) {
                return {
                    data: response,
                    menssage: "Lista de aliados",
                    status: 200
                }
            } else {
                return {
                    data: [],
                    menssage: "Aliados no encontrados",
                    status: 400
                }
            } 
        } catch (error) {
            return {
                data: [],
                menssage: error,
                status: 500
            }   
        }
   
    }

    async getPartnerByCategory(categoryId: string): Promise<IResponse>{ 

        try {
            const response = await this._partnersModel.find({categoryId: new mongo.ObjectId(categoryId), status: "ACTIVE"});
    
            if (response.length) {
                return {
                    data: response,
                    menssage: "Lista de aliados por categoría",
                    status: 200
                }
            } else {
                return {
                    data: [],
                    menssage: "Aliados no encontrados",
                    status: 400
                }
            } 
        } catch (error) {
            return {
                data: [],
                menssage: error,
                status: 500
            }   
        }
   
    }

    async getPartnerById(idPartner: string): Promise<IResponse> {
        try {
            const response = await this._partnersModel.findOne({ _id: new mongo.ObjectId(idPartner), status: 'ACTIVE' });
            
            if (response == null) {
                return {
                    data: [],
                    menssage: "Partnera no encontrada o inactivo",
                    status: 400
                }
            }  

            return {
                data: response,
                menssage: "Partneras encontrados",
                status: 200
            }

        } catch (error) {
            return {
                data: [],
                menssage: error,
                status: 400
            }
        }
    }
}
