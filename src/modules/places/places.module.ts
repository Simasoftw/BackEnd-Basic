import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Places, PlacesSchema } from './schema/places.schema';
import { PlaceController } from './places.controller';
import { PlaceService } from './places.service';
import { AuthService } from '../auth/auth.service';
import { User, UserSchema } from '../users/schema/users.schema';

@Module({
    imports:[ 
        MongooseModule.forFeature([
            { name: Places.name, schema: PlacesSchema },
            { name: User.name, schema: UserSchema }
        ]),
    ],
    controllers: [PlaceController],
    providers: [PlaceService, AuthService]

})
export class PlaceModule {}
