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

    @Prop({ required: false }) 
    Description: string;

    @Prop({ required: true })
    @IsNotEmpty()
    address: string;

    @Prop({ required: true })
    @IsNotEmpty()
    longitude: string;

    @Prop({ required: true })
    @IsNotEmpty()
    latitude: string;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'categories',  required: true })
    @IsNotEmpty()
    categoriesId: string;

    @Prop({ required: true })
    @IsNotEmpty()
    type: string;

    @Prop({ required: false })
    @IsNotEmpty()
    whatsApp: string;

    @Prop({ required: false }) 
    phone: string;

    @Prop({ required: false }) 
    arrayImage: Array<any>;
     
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'companis' , required: true })
    companyId: string;

    @Prop({ required: true })
    status: string;
}
export const PlacesSchema = SchemaFactory.createForClass(Places);