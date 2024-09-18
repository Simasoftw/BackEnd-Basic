import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class OtplDTO {
 
    @Prop({ required: true })
    @IsNotEmpty()
    code: string; 

    @Prop({ required: true })
    @IsNotEmpty()
    @IsEmail()
    email: string; 

    @Prop({ required: true })
    attempts: number; 

    @Prop({ required: true })
    @IsNotEmpty()
    idUser: string;

    @Prop({ required: true })
    @IsNotEmpty()
    status: string;
}