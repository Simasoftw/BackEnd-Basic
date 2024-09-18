"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_schema_1 = require("./schema/users.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const status_constant_1 = require("../../shared/utils/status.constant");
const componey_dto_1 = require("../company/dtos/componey.dto");
const company_service_1 = require("../company/company.service");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(usersModel, _companyService) {
        this.usersModel = usersModel;
        this._companyService = _companyService;
    }
    async insertar(userDto) {
        try {
            let email = userDto.email.toLocaleLowerCase().replace(" ", "");
            const responseUser = await this.usersModel.find({
                $or: [{ email }, { identification: userDto.identification }]
            });
            if (responseUser.length) {
                return {
                    data: [],
                    menssage: `El usuario con correo ${email} ya se encuantra registrado`,
                    status: 400
                };
            }
            console.log("llego en salto_________");
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(userDto.password, salt);
            userDto.password = password;
            userDto.email = email;
            userDto.status = status_constant_1.CONSTANTS_STATUS.ACTIVE;
            const response = new this.usersModel(userDto);
            await response.save();
            if (response) {
                return {
                    data: response,
                    menssage: "Usuario registrado con exito",
                    status: 200
                };
            }
        }
        catch (error) {
            console.log("error-->", error);
            return {
                data: [],
                menssage: error,
                status: 400
            };
        }
    }
    async update(createUserDTO, idUsuario) {
        const response = await this.usersModel.findByIdAndUpdate(idUsuario, createUserDTO, { new: true });
        if (response?._id) {
            return {
                data: response,
                menssage: "Usuario actualizado con exito",
                status: 200
            };
        }
        else {
            return {
                data: response,
                menssage: "Usuario no encontrado",
                status: 400
            };
        }
    }
    async gestClientById(idUsuario) {
        try {
            const response = await this.usersModel.find({ _id: new mongoose_2.mongo.ObjectId(idUsuario), status: 'ACTIVE' });
            if (response?.length == 0) {
                return {
                    data: response,
                    menssage: "Usuario no encontrado o inactivo",
                    status: 400
                };
            }
            return {
                data: response,
                menssage: "Información usuario",
                status: 200
            };
        }
        catch (error) {
            return {
                data: [],
                menssage: error,
                status: 400
            };
        }
    }
    async registerUserAdmin(userDtoAdmin) {
        try {
            let email = userDtoAdmin.email.toLocaleLowerCase().replace(" ", "");
            userDtoAdmin.rol = "ADMIN";
            userDtoAdmin.status = status_constant_1.CONSTANTS_STATUS.ACTIVE;
            const responseUser = await this.usersModel.find({
                $or: [{ email: userDtoAdmin.email }, { identification: userDtoAdmin.identification }]
            });
            if (responseUser.length) {
                return {
                    data: [],
                    menssage: `El usuario con correo ${email} ya se encuantra registrado`,
                    status: 400
                };
            }
            let companyDTO = new componey_dto_1.CompanyDTO;
            companyDTO.name = "Principal";
            const responseCompany = await this._companyService.createCompany(companyDTO);
            if (responseCompany.status != 200) {
                return {
                    data: [],
                    menssage: "Error al crear la compañia",
                    status: 400
                };
            }
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(userDtoAdmin.password, salt);
            userDtoAdmin.password = password;
            userDtoAdmin.companyId = responseCompany.data._id;
            userDtoAdmin.email = email;
            const response = new this.usersModel(userDtoAdmin);
            await response.save();
            if (response) {
                return {
                    data: [response],
                    menssage: "Usuario registrado con exito",
                    status: 200
                };
            }
        }
        catch (error) {
            return {
                data: [],
                menssage: error.message || "Error al registrar el usuario",
                status: 500
            };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        company_service_1.CompanyService])
], UsersService);
//# sourceMappingURL=users.service.js.map