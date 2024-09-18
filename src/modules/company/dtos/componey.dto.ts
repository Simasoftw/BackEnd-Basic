import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CompanyDTO {
 
    @Prop({ required: false })
    email: string;

    @Prop({ required: false })
    identification: number;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string

    @Prop({ required: false })
    address : string;

    @Prop({ required: false })
    phone : number; 

    @Prop({ required: false })
    status: string;

    @Prop({ required: false })
    web: string;

}