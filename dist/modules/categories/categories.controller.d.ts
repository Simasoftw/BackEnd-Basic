/// <reference types="multer" />
import { CategoriService } from './categories.service';
import { CategoriDTO } from './dtos/categories.dto';
export declare class CategoriController {
    private readonly _categoriesService;
    constructor(_categoriesService: CategoriService);
    createCategori(categoriDTO: CategoriDTO, file: Express.Multer.File): Promise<any>;
    updateCompany(categoriDTO: CategoriDTO, IdCategori: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    deleteCompany(IdCategori: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findByCompany(categoriDTO: CategoriDTO): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findById(IdCategori: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
}
