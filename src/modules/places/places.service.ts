import { Injectable } from '@nestjs/common';
import { PlaceDTO } from './dtos/places.dto';
import { Places, PlacesDocument } from './schema/places.schema';
import { Model, mongo } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CONSTANTS_STATUS } from 'src/shared/utils/status.constant';
import { IResponse } from 'src/shared/utils/IResponse.util';

@Injectable()
export class PlaceService {

    constructor(
        @InjectModel(Places.name) private _placesModel: Model<PlacesDocument>,
    ){ }

    async createPlace(placesDTO: PlaceDTO):Promise<any> {

        try{

            placesDTO.status = CONSTANTS_STATUS.ACTIVE; 
            const response  = await new this._placesModel(placesDTO);
            response.save(); 

            if(response){
                return {
                    data: response,
                    menssage: "Placea creada con exito",
                    status: 200
                }
            }

        } catch( error) {
            return {
                data: [],
                message: error.message,
                status: 500
            }
        }

    }
 

    async update(placesDTO: PlaceDTO, idPlace): Promise<IResponse> {
        const response =  await this._placesModel.findByIdAndUpdate(idPlace,
            placesDTO, { new: true });
            if (response?._id) {
                return {
                    data: response,
                    menssage: "Placea actualizada con exito",
                    status: 200
                }
            }else{
                return {
                    data: response,
                    menssage: "Placea no encontrado",
                    status: 400
                }
            }
      
    }

    async delete(IdPlace: string): Promise<IResponse>{
        const response = await this._placesModel.findByIdAndUpdate(IdPlace,
            {status: "INACTIVE"}, { new: true });;
        if (response?._id) {
            return {
                data: response,
                menssage: "Placea eliminado con exito",
                status: 200
            }
        }else{
            return {
                data: response,
                menssage: "Placea no encontrado",
                status: 400
            }
        }
       
    } 

    async filterPlaceByCompany(body: any): Promise<IResponse>{ 
        try {
            const response = await this._placesModel.find({ companyId: new mongo.ObjectId(body.companyId), status: 'ACTIVE' });

            if (response.length) {
                return {
                    data: response,
                    menssage: "Lista de lugares",
                    status: 200
                }
            } else {
                return {
                    data: [],
                    menssage: "Lugares no encontrados",
                    status: 400
                }
            }  
        } catch (error) {
            return {
                data: [],
                menssage: error.message,
                status: 500
            }
        }
        
    }

    async getPlaceById(idPlace: string): Promise<IResponse> {
        try {
            const response = await this._placesModel.findOne({ _id: new mongo.ObjectId(idPlace), status: 'ACTIVE' });
            
            if (response == null) {
                return {
                    data: [],
                    menssage: "Placea no encontrada o inactivo",
                    status: 400
                }
            }  

            return {
                data: response,
                menssage: "Placeas encontrados",
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
