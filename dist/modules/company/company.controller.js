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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const componey_dto_1 = require("./dtos/componey.dto");
let CompanyController = class CompanyController {
    constructor(_companyService) {
        this._companyService = _companyService;
    }
    async createCompany(customerDTO) {
        return await this._companyService.createCompany(customerDTO);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [componey_dto_1.CompanyDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createCompany", null);
exports.CompanyController = CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map