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
exports.PartnerService = void 0;
const common_1 = require("@nestjs/common");
const partners_schema_1 = require("./schema/partners.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const status_constant_1 = require("../../shared/utils/status.constant");
let PartnerService = class PartnerService {
    constructor(_partnersModel) {
        this._partnersModel = _partnersModel;
    }
    async createPartner(partnersDTO) {
        try {
            partnersDTO.status = status_constant_1.CONSTANTS_STATUS.ACTIVE;
            const response = await new this._partnersModel(partnersDTO);
            response.save();
            if (response) {
                return {
                    data: response,
                    menssage: "Aliado creado con exito",
                    status: 200
                };
            }
        }
        catch (error) {
            return {
                data: [],
                menssage: error,
                status: 500
            };
        }
    }
    async update(partnersDTO, idPartner) {
        const response = await this._partnersModel.findByIdAndUpdate(idPartner, partnersDTO, { new: true });
        if (response?._id) {
            return {
                data: response,
                menssage: "Partnera actualizada con exito",
                status: 200
            };
        }
        else {
            return {
                data: response,
                menssage: "Partnera no encontrado",
                status: 400
            };
        }
    }
    async delete(IdPartner) {
        const response = await this._partnersModel.findByIdAndUpdate(IdPartner, { status: "INACTIVE" }, { new: true });
        ;
        if (response?._id) {
            return {
                data: response,
                menssage: "Partnera eliminado con exito",
                status: 200
            };
        }
        else {
            return {
                data: response,
                menssage: "Partnera no encontrado",
                status: 400
            };
        }
    }
    async filterPartnerByCompany(body) {
        try {
            const response = await this._partnersModel.find({ companyId: new mongoose_1.mongo.ObjectId(body.companyId), status: "ACTIVE" });
            if (response.length) {
                return {
                    data: response,
                    menssage: "Lista de aliados",
                    status: 200
                };
            }
            else {
                return {
                    data: [],
                    menssage: "Aliados no encontrados",
                    status: 400
                };
            }
        }
        catch (error) {
            return {
                data: [],
                menssage: error,
                status: 500
            };
        }
    }
    async getPartnerByCategory(categoryId) {
        try {
            const response = await this._partnersModel.find({ categoryId: new mongoose_1.mongo.ObjectId(categoryId), status: "ACTIVE" });
            if (response.length) {
                return {
                    data: response,
                    menssage: "Lista de aliados por categoría",
                    status: 200
                };
            }
            else {
                return {
                    data: [],
                    menssage: "Aliados no encontrados",
                    status: 400
                };
            }
        }
        catch (error) {
            return {
                data: [],
                menssage: error,
                status: 500
            };
        }
    }
    async getPartnerById(idPartner) {
        try {
            const response = await this._partnersModel.findOne({ _id: new mongoose_1.mongo.ObjectId(idPartner), status: 'ACTIVE' });
            if (response == null) {
                return {
                    data: [],
                    menssage: "Partnera no encontrada o inactivo",
                    status: 400
                };
            }
            return {
                data: response,
                menssage: "Partneras encontrados",
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
};
exports.PartnerService = PartnerService;
exports.PartnerService = PartnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(partners_schema_1.Partners.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PartnerService);
//# sourceMappingURL=partners.service.js.map