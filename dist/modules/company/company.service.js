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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const company_schema_1 = require("./schema/company.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const status_constant_1 = require("../../shared/utils/status.constant");
let CompanyService = class CompanyService {
    constructor(_companiesModel) {
        this._companiesModel = _companiesModel;
    }
    async createCompany(companyDTO) {
        try {
            companyDTO.status = status_constant_1.CONSTANTS_STATUS.ACTIVE;
            companyDTO.name = "Principal";
            const response = await new this._companiesModel(companyDTO);
            response.save();
            if (response) {
                return {
                    data: response,
                    menssage: "Compañia creado con exito",
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
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(company_schema_1.Companies.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CompanyService);
//# sourceMappingURL=company.service.js.map