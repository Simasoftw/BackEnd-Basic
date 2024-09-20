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
import { PartnerDTO } from './dtos/partners.dto';
import { PartnersDocument } from './schema/partners.schema';
import { Model } from "mongoose";
import { IResponse } from 'src/shared/utils/IResponse.util';
export declare class PartnerService {
    private _partnersModel;
    constructor(_partnersModel: Model<PartnersDocument>);
    createPartner(partnersDTO: PartnerDTO): Promise<any>;
    update(partnersDTO: PartnerDTO, idPartner: any): Promise<IResponse>;
    delete(IdPartner: string): Promise<IResponse>;
    filterPartnerByCompany(body: any): Promise<IResponse>;
    getPartnerByCategory(categoryId: string): Promise<IResponse>;
    getPartnerById(idPartner: string): Promise<IResponse>;
}
