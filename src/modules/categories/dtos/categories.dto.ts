import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CategoriDTO {
 
    @Prop({ required: false })
    name: string;

    @Prop({ required: false })
    image: number;

    @Prop({ required: true })
    @IsNotEmpty()
    description: string

    @Prop({ required: false })
    code : string; 

    @Prop({ required: false })
    status: string;

    @Prop({ required: true })
    companyId: string;
}