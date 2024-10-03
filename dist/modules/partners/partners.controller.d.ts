/// <reference types="multer" />
import { PartnerService } from './partners.service';
import { PartnerDTO } from './dtos/partners.dto';
export declare class PartnerController {
    private readonly _partnersService;
    constructor(_partnersService: PartnerService);
    createPlace(partnerDTO: PartnerDTO, files: Express.Multer.File[]): Promise<any>;
    updateCompany(partnerDTO: PartnerDTO, IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    deleteCompany(IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findByCompany(partnerDTO: PartnerDTO): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findById(IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    getPartnerByCategory(categoryId: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    filterCustomerByUser(data: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
}
