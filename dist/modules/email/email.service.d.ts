/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { EmailDocument } from './schema/email.schema';
import { Model } from "mongoose";
import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from '../auth/auth.service';
import { OtpDocument } from './schema/otp.schema';
export declare class EmailsService {
    private emailesModel;
    private _otpModel;
    private readonly mailerService;
    private readonly _authService;
    constructor(emailesModel: Model<EmailDocument>, _otpModel: Model<OtpDocument>, mailerService: MailerService, _authService: AuthService);
    sendEmailWithOTP(subject: string, template: string, context: any, body: any, request: any): Promise<{
        menssage: string;
        data: any[];
        status: number;
    }>;
    sendPageWeb(to: string, subject: string, template: string, context: any): Promise<{
        menssage: string;
        data: any[];
        status: number;
    }>;
    validateCodeOTP(code: string, request: any): Promise<{
        menssage: string;
        data: import("mongoose").UpdateWriteOpResult[];
        status: number;
    }>;
}
