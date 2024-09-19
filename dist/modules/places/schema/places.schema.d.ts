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
import mongoose from "mongoose";
export type PlacesDocument = Places & Document;
export declare class Places {
    description: string;
    name: string;
    images: string[];
    longitud: number;
    latitud: number;
    autor?: string;
    openingDate?: Date;
    dedication?: string;
    reference?: string;
    referencePhoto?: string;
    mainTypology?: string;
    secondaryTypology?: string;
    advocacy?: string;
    companyId: string;
    categoryId: string;
    status: string;
    audio: Blob;
    address: string;
}
export declare const PlacesSchema: mongoose.Schema<Places, mongoose.Model<Places, any, any, any, mongoose.Document<unknown, any, Places> & Places & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Places, mongoose.Document<unknown, {}, mongoose.FlatRecord<Places>> & mongoose.FlatRecord<Places> & {
    _id: mongoose.Types.ObjectId;
}>;
