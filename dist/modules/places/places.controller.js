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
exports.PlaceController = void 0;
const common_1 = require("@nestjs/common");
const places_service_1 = require("./places.service");
const places_dto_1 = require("./dtos/places.dto");
const auth_guard_1 = require("../../shared/guards/auth.guard");
let PlaceController = class PlaceController {
    constructor(_placesService) {
        this._placesService = _placesService;
    }
    async createPlace(categoriDTO) {
        return await this._placesService.createPlace(categoriDTO);
    }
    async updateCompany(categoriDTO, IdPlace) {
        return await this._placesService.update(categoriDTO, IdPlace);
    }
    async deleteCompany(IdPlace) {
        return await this._placesService.delete(IdPlace);
    }
    async findByCompany(categoriDTO) {
        return await this._placesService.filterPlaceByCompany(categoriDTO);
    }
    async findById(IdPlace) {
        return await this._placesService.getPlaceById(IdPlace);
    }
};
exports.PlaceController = PlaceController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [places_dto_1.PlaceDTO]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "createPlace", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)("/update/:IdPlace"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('IdPlace')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [places_dto_1.PlaceDTO, Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)("/delete/:IdPlace"),
    __param(0, (0, common_1.Param)('IdPlace')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "deleteCompany", null);
__decorate([
    (0, common_1.Post)("/findbyCompany"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [places_dto_1.PlaceDTO]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "findByCompany", null);
__decorate([
    (0, common_1.Get)("/findById/:IdPlace"),
    __param(0, (0, common_1.Param)('IdPlace')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "findById", null);
exports.PlaceController = PlaceController = __decorate([
    (0, common_1.Controller)('places'),
    __metadata("design:paramtypes", [places_service_1.PlaceService])
], PlaceController);
//# sourceMappingURL=places.controller.js.map