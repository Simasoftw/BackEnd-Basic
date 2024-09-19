import { Injectable } from '@nestjs/common';
import { CategoriDTO } from './dtos/categories.dto';
import { Categories, CategoriesDocument } from './schema/categories.schema';
import { Model, mongo } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CONSTANTS_STATUS } from 'src/shared/utils/status.constant';
import { IResponse } from 'src/shared/utils/IResponse.util';

@Injectable()
export class CategoriService {

    constructor(
        @InjectModel(Categories.name) private _categoriesModel: Model<CategoriesDocument>,
    ){ }

    async createCategori(categoriesDTO: CategoriDTO):Promise<any> {

        try{

            categoriesDTO.status = CONSTANTS_STATUS.ACTIVE; 
            const response  = await new this._categoriesModel(categoriesDTO);
            response.save(); 

            if(response){
                return {
                    data: response,
                    menssage: "Categoria creada con exito",
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

    async update(categoriesDTO: CategoriDTO, idCategori): Promise<IResponse> {
        const response =  await this._categoriesModel.findByIdAndUpdate(idCategori,
            categoriesDTO, { new: true });
            if (response?._id) {
                return {
                    data: response,
                    menssage: "Categoria actualizada con exito",
                    status: 200
                }
            }else{
                return {
                    data: response,
                    menssage: "Categoria no encontrado",
                    status: 400
                }
            }
      
    }

    async delete(IdCategori: string): Promise<IResponse>{
        const response = await this._categoriesModel.findByIdAndUpdate(IdCategori,
            {status: "INACTIVE"}, { new: true });;
        if (response?._id) {
            return {
                data: response,
                menssage: "Categoria eliminado con exito",
                status: 200
            }
        }else{
            return {
                data: response,
                menssage: "Categoria no encontrado",
                status: 400
            }
        }
       
    } 

    async filterCategoriByCompany(body: any): Promise<IResponse>{ 

        const response = await this._categoriesModel.find({companyId: new mongo.ObjectId(body.companyId), status: "ACTIVE"});
    
        if (response.length) {
            return {
                data: response,
                menssage: "Lista de categorias",
                status: 200
            }
        } else {
            return {
                data: [],
                menssage: "categorias no encontradas",
                status: 400
            }
        }  
    }

    async getCategoriById(idCategori: string): Promise<IResponse> {
        try {
            const response = await this._categoriesModel.findOne({ _id: new mongo.ObjectId(idCategori), status: 'ACTIVE' });
            
            if (response == null) {
                return {
                    data: [],
                    menssage: "Categoria no encontrada o inactivo",
                    status: 400
                }
            }  

            return {
                data: response,
                menssage: "Categorias encontrados",
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
