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
exports.PartnerController = void 0;
const common_1 = require("@nestjs/common");
const partners_service_1 = require("./partners.service");
const partners_dto_1 = require("./dtos/partners.dto");
let PartnerController = class PartnerController {
    constructor(_partnersService) {
        this._partnersService = _partnersService;
    }
    async createPartner(categoriDTO) {
        return await this._partnersService.createPartner(categoriDTO);
    }
    async updateCompany(categoriDTO, IdPartner) {
        return await this._partnersService.update(categoriDTO, IdPartner);
    }
    async deleteCompany(IdPartner) {
        return await this._partnersService.delete(IdPartner);
    }
    async findByCompany(categoriDTO) {
        return await this._partnersService.filterPartnerByCompany(categoriDTO);
    }
    async findById(IdPartner) {
        return await this._partnersService.getPartnerById(IdPartner);
    }
    async getPartnerByCategory(categoryId) {
        return await this._partnersService.getPartnerByCategory(categoryId);
    }
};
exports.PartnerController = PartnerController;
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partners_dto_1.PartnerDTO]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "createPartner", null);
__decorate([
    (0, common_1.Post)("/update/:IdPartner"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('IdPartner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partners_dto_1.PartnerDTO, Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.Post)("/delete/:IdPartner"),
    __param(0, (0, common_1.Param)('IdPartner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "deleteCompany", null);
__decorate([
    (0, common_1.Post)("/findbyCompany"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partners_dto_1.PartnerDTO]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "findByCompany", null);
__decorate([
    (0, common_1.Get)("/findById/:IdPartner"),
    __param(0, (0, common_1.Param)('IdPartner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)("/getPartnerByCategory/:categoryId"),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnerController.prototype, "getPartnerByCategory", null);
exports.PartnerController = PartnerController = __decorate([
    (0, common_1.Controller)('partners'),
    __metadata("design:paramtypes", [partners_service_1.PartnerService])
], PartnerController);
//# sourceMappingURL=partners.controller.js.map