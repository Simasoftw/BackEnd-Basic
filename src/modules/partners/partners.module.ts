import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Partners, PartnersSchema } from './schema/partners.schema';
import { PartnerController } from './partners.controller';
import { PartnerService } from './partners.service';
import { AuthService } from '../auth/auth.service';
import { User, UserSchema } from '../users/schema/users.schema';

@Module({
    imports:[ 
        MongooseModule.forFeature([
            { name: Partners.name, schema: PartnersSchema },
            { name: User.name, schema: UserSchema }
        ]),
        
    ],
    controllers: [PartnerController],
    providers: [PartnerService, AuthService]

})
export class PartnerModule {}
