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
import { Model } from "mongoose";
import { JwtService } from '@nestjs/jwt';
import { AuthDTO } from './dtos/usuarios.dto';
import { User, UserDocument } from '../users/schema/users.schema';
import { IResponse } from 'src/shared/utils/IResponse.util';
import { Request } from 'express';
export declare class AuthService {
    private usersModel;
    private jwtService;
    constructor(usersModel: Model<UserDocument>, jwtService: JwtService);
    login(authDTO: AuthDTO): Promise<IResponse>;
    validateUser(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    validateToken(token: string): Promise<boolean>;
    validateUserToken(request: any): Promise<any>;
    extractTokenFromHeader(request: Request): string | undefined;
}
