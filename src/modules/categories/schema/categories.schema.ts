import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";
export type CategoriesDocument = Categories & Document;

@Schema({
    timestamps: {
        createdAt: 'create_at',
        updatedAt: 'update_at'
    }  
})
export class Categories {

    @Prop({ required: true })
    @IsNotEmpty()
    name: string;

    @Prop({ required: false }) 
    image: string;

    @Prop({ required: true })
    @IsNotEmpty()
    description: string

    @Prop({ required: true })
    @IsNotEmpty()
    code : string; 
 
    @Prop({ required: true })
    status: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'companis', required: true })
    companyId: string;
}
export const CategoriesSchema = SchemaFactory.createForClass(Categories);