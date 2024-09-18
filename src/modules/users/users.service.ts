import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/users.schema';
import { UserDTO } from './dtos/users.dto';
import { IResponse } from '../../shared/utils/IResponse.util';
import { InjectModel } from "@nestjs/mongoose";
import { Model, mongo } from "mongoose";
import { CONSTANTS_STATUS } from 'src/shared/utils/status.constant';
import { CompanyDTO } from '../company/dtos/componey.dto';
import { UserAdminDTO } from './dtos/users-admin.dto';
import { CompanyService } from '../company/company.service';
import * as bcrypt from 'bcryptjs'; 

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private usersModel: Model<UserDocument>,
        private readonly _companyService: CompanyService,
    ) { }

    async insertar(userDto: UserDTO): Promise<IResponse> {
        try {

            let email = userDto.email.toLocaleLowerCase().replace(" ", "");

            const responseUser = await this.usersModel.find({
                $or: [{ email }, { identification: userDto.identification }]
            });

            if (responseUser.length) {
                return {
                    data: [],
                    menssage: `El usuario con correo ${email} ya se encuantra registrado`,
                    status: 400
                }
            }
            console.log("llego en salto_________");
            
            const salt = await bcrypt.genSalt(10); 
            const password = await bcrypt.hash(userDto.password, salt);  

            userDto.password = password;
            userDto.email = email;
            userDto.status = CONSTANTS_STATUS.ACTIVE;
            const response = new this.usersModel(userDto);
            await response.save();

            if (response) {
                return {
                    data: response,
                    menssage: "Usuario registrado con exito",
                    status: 200
                }
            }

        } catch (error) {
            console.log("error-->", error);
            
            return {
                data: [],
                menssage: error,
                status: 400
            }
        }
    }

    async update(createUserDTO: UserDTO, idUsuario): Promise<IResponse> {
        const response = await this.usersModel.findByIdAndUpdate(idUsuario,
            createUserDTO, { new: true });
        if (response?._id) {
            return {
                data: response,
                menssage: "Usuario actualizado con exito",
                status: 200
            }
        } else {
            return {
                data: response,
                menssage: "Usuario no encontrado",
                status: 400
            }
        }
    }

    async gestClientById(idUsuario: string): Promise<IResponse> {
        try {
            const response = await this.usersModel.find({ _id: new mongo.ObjectId(idUsuario), status: 'ACTIVE' });
            
            if (response?.length == 0) {
                return {
                    data: response,
                    menssage: "Usuario no encontrado o inactivo",
                    status: 400
                }
            } 

            return {
                data: response,
                menssage: "Información usuario",
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

    async registerUserAdmin(userDtoAdmin: UserAdminDTO): Promise<IResponse> {
        try {

            let email = userDtoAdmin.email.toLocaleLowerCase().replace(" ", "");
    
            userDtoAdmin.rol = "ADMIN";
            userDtoAdmin.status = CONSTANTS_STATUS.ACTIVE;

            const responseUser = await this.usersModel.find({
                $or: [{ email:  userDtoAdmin.email}, { identification: userDtoAdmin.identification }]
            });


            if (responseUser.length) {
                return {
                    data: [],
                    menssage: `El usuario con correo ${email} ya se encuantra registrado`,
                    status: 400
                }
            }

            let companyDTO =  new CompanyDTO;
            companyDTO.name = "Principal";

            const responseCompany = await this._companyService.createCompany(companyDTO);


            if (responseCompany.status != 200) {
                return {
                    data: [],
                    menssage: "Error al crear la compañia",
                    status: 400
                }
            }
 
            
            const salt = await bcrypt.genSalt(10); 
            const password = await bcrypt.hash(userDtoAdmin.password, salt);   

            userDtoAdmin.password = password;
            userDtoAdmin.companyId = responseCompany.data._id;
            userDtoAdmin.email = email;
            
            const response = new this.usersModel(userDtoAdmin);
            await response.save();

            if (response) {
                return {
                    data: [response],
                    menssage: "Usuario registrado con exito",
                    status: 200
                }
            }

        } catch (error) {
            return {
                data: [],
                menssage: error.message || "Error al registrar el usuario",
                status: 500
            }
        }
    }

}
