import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
export type CompaniesDocument = Companies & Document;

@Schema({
    timestamps: {
        createdAt: 'create_at',
        updatedAt: 'update_at'
    }  
})
export class Companies {

    @Prop({ required: false })
    email: string;

    @Prop({ required: false })
    @IsNotEmpty()
    identification: number;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string

    @Prop({ required: false })
    address : string;

    @Prop({ required: false })
    phone : number; 

    @Prop({ required: true })
    status: string;

    @Prop({ required: false })
    web: string;
 
}
export const CompaniesSchema = SchemaFactory.createForClass(Companies);