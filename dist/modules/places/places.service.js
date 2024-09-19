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
exports.PlaceService = void 0;
const common_1 = require("@nestjs/common");
const places_schema_1 = require("./schema/places.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const status_constant_1 = require("../../shared/utils/status.constant");
let PlaceService = class PlaceService {
    constructor(_placesModel) {
        this._placesModel = _placesModel;
    }
    async createPlace(placesDTO) {
        try {
            placesDTO.status = status_constant_1.CONSTANTS_STATUS.ACTIVE;
            const response = await new this._placesModel(placesDTO);
            response.save();
            if (response) {
                return {
                    data: response,
                    menssage: "Placea creada con exito",
                    status: 200
                };
            }
        }
        catch (error) {
            return {
                data: [],
                message: error.message,
                status: 500
            };
        }
    }
    async update(placesDTO, idPlace) {
        const response = await this._placesModel.findByIdAndUpdate(idPlace, placesDTO, { new: true });
        if (response?._id) {
            return {
                data: response,
                menssage: "Placea actualizada con exito",
                status: 200
            };
        }
        else {
            return {
                data: response,
                menssage: "Placea no encontrado",
                status: 400
            };
        }
    }
    async delete(IdPlace) {
        const response = await this._placesModel.findByIdAndUpdate(IdPlace, { status: "INACTIVE" }, { new: true });
        ;
        if (response?._id) {
            return {
                data: response,
                menssage: "Placea eliminado con exito",
                status: 200
            };
        }
        else {
            return {
                data: response,
                menssage: "Placea no encontrado",
                status: 400
            };
        }
    }
    async filterPlaceByCompany(body) {
        const response = await this._placesModel.find({ companyId: new mongoose_1.mongo.ObjectId(body.companyId), status: 'ACTIVE' });
        if (response.length) {
            return {
                data: response,
                menssage: "Lista de lugares",
                status: 200
            };
        }
        else {
            return {
                data: [],
                menssage: "Lugares no encontrados",
                status: 400
            };
        }
    }
    async getPlaceById(idPlace) {
        try {
            const response = await this._placesModel.findOne({ _id: new mongoose_1.mongo.ObjectId(idPlace), status: 'ACTIVE' });
            if (response == null) {
                return {
                    data: [],
                    menssage: "Placea no encontrada o inactivo",
                    status: 400
                };
            }
            return {
                data: response,
                menssage: "Placeas encontrados",
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
exports.PlaceService = PlaceService;
exports.PlaceService = PlaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(places_schema_1.Places.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PlaceService);
//# sourceMappingURL=places.service.js.map