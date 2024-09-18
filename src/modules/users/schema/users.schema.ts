import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from "class-validator";
export type UserDocument = User & Document;

@Schema({
    timestamps: {
        createdAt: 'create_at',
        updatedAt: 'update_at'
    }  
})
export class User {
    @Prop({ required: true })
    @IsEmail()
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    identification: number;

    @Prop({ required: true })
    @IsNotEmpty()
    name: string

    @Prop({ required: true })
    lastName : string;

    @Prop({ required: false })
    birthday : string;

    @Prop({ required: false })
    address : string;

    @Prop({ required: false })
    phone : number;

    @Prop({ required: true })
    rol: string;

    @Prop({ required: false })
    companyId: string; 

    @Prop({ required: true })
    status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);