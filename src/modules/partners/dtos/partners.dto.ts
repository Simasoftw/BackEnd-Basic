import { Prop, raw } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class PartnerDTO {
 
    @Prop({ required: false })
    name: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    @IsNotEmpty()
    description: string

    @Prop({ required: false })
    status: string;

    @Prop({ required: true })
    companyId: string;

    @Prop({ required: false })
    whatsapp: number;

    @Prop({ required: false })
    phone: number;

    @Prop({ required: true })
    link: string;

    @Prop({ required: false })
    address: string;

    @Prop({ required: true })
    categoryId: string;

    @IsOptional()
    images: any[];
}