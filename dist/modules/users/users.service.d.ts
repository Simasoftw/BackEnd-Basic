/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UserDocument } from './schema/users.schema';
import { UserDTO } from './dtos/users.dto';
import { IResponse } from '../../shared/utils/IResponse.util';
import { Model } from "mongoose";
import { UserAdminDTO } from './dtos/users-admin.dto';
import { CompanyService } from '../company/company.service';
export declare class UsersService {
    private usersModel;
    private readonly _companyService;
    constructor(usersModel: Model<UserDocument>, _companyService: CompanyService);
    insertar(userDto: UserDTO): Promise<IResponse>;
    update(createUserDTO: UserDTO, idUsuario: any): Promise<IResponse>;
    gestClientById(idUsuario: string): Promise<IResponse>;
    registerUserAdmin(userDtoAdmin: UserAdminDTO): Promise<IResponse>;
}
