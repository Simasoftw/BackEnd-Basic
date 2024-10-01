import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export type PlacesDocument = Places & Document;

@Schema({
    timestamps: {
        createdAt: 'create_at',
        updatedAt: 'update_at'
    }  
})
export class Places {

    @Prop({ required: true }) 
    description: string;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string;

    @Prop({ type: [String], required: false }) // Cambiamos a un array de cadenas
    imagesUrl: String[]; // Cambiamos a un array de cadenas para almacenar URLs de imágenes

    @Prop({ required: true })
    @IsNotEmpty()
    longitud: number; // Cambiado de 'longitude' a 'longitud'

    @Prop({ required: true })
    @IsNotEmpty()
    latitud: number; // Cambiado de 'latitude' a 'latitud'

    @Prop({ required: false }) 
    autor?: string; // Agregado como opcional

    @Prop({required: false }) 
    openingDate?: string; // Agregado como opcional

    @Prop({ required: false }) 
    dedication?: string; // Agregado como opcional

    @Prop({ required: false }) 
    reference: string; // Agregado como opcional

    @Prop({ required: false }) 
    referencePhoto: string; // Agregado como opcional

    @Prop({ required: false }) 
    mainTypology?: string; // Agregado como opcional

    @Prop({ required: false }) 
    secondaryTypology?: string; // Agregado como opcional

    @Prop({ required: false }) 
    advocacy: string; // Agregado como opcional

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'companies', required: true })
    companyId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true })
    categoryId: string;

    @Prop({ required: true })
    status: string;

    @Prop({ required: false }) 
    audio: string; 

    @Prop({ required: true })
    address: string;

    @Prop({
        default: Date.now,
        index: {
            expireAfterSeconds: 259200,
            partialFilterExpression: {
                status: 'INACTIVE'
            }
        }
    })
    expire: Date;
}

export const PlacesSchema = SchemaFactory.createForClass(Places);
