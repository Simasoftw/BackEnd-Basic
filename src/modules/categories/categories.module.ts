import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategoriesSchema } from './schema/categories.schema';
import { CategoriController } from './categories.controller';
import { CategoriService } from './categories.service';
import { AuthService } from '../auth/auth.service';
import { UserSchema, User } from '../users/schema/users.schema';

@Module({
    imports:[ 
        MongooseModule.forFeature([
            { name: Categories.name, schema: CategoriesSchema },
            { name: User.name, schema: UserSchema }
        ]),
    ],
    controllers: [CategoriController],
    providers: [CategoriService, AuthService]

})
export class CategoriModule {}
