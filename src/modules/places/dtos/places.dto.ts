import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";

export class PlaceDTO { 

    @Prop({ required: false })
    @IsNotEmpty()
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

    @Prop({ required: true })
    @IsNotEmpty()
    categoriesId: string;

    @Prop({ required: true })
    @IsNotEmpty()
    type: string;

    @Prop({ required: false })
    @IsNotEmpty()
    whatsApp: string;

    @Prop({ required: false })
    @IsNotEmpty()
    phone: string;

    @Prop({ required: false }) 
    arrayImage: Array<any>;

    @Prop({ required: false })
    status: string;

    @Prop({ required: true })
    companyId: string;
}