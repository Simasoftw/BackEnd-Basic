"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const partners_schema_1 = require("./schema/partners.schema");
const partners_controller_1 = require("./partners.controller");
const partners_service_1 = require("./partners.service");
const auth_service_1 = require("../auth/auth.service");
const users_schema_1 = require("../users/schema/users.schema");
let PartnerModule = class PartnerModule {
};
exports.PartnerModule = PartnerModule;
exports.PartnerModule = PartnerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: partners_schema_1.Partners.name, schema: partners_schema_1.PartnersSchema },
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema }
            ]),
        ],
        controllers: [partners_controller_1.PartnerController],
        providers: [partners_service_1.PartnerService, auth_service_1.AuthService]
    })
], PartnerModule);
//# sourceMappingURL=partners.module.js.map