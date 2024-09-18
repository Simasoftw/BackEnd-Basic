import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO {

    @Prop({ required: false })
    @IsEmail()
    email: string;

    @Prop({ required: true })
    @IsNotEmpty()
    password: string;

    @Prop({ required: true })
    identification: number;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string

    @Prop({ required: true })
    @IsNotEmpty()
    lastName : string;

    @Prop({ required: false })
    birthday : string;

    @Prop({ required: false })
    address : string;

    @Prop({ required: false })
    phone : string;

    @Prop({ required: true })
    rol: string;

    @Prop({ required: true })
    status: string;
    
    @Prop({ required: true })
    companyId: string;

}