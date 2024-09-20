import { PartnerService } from './partners.service';
import { PartnerDTO } from './dtos/partners.dto';
export declare class PartnerController {
    private readonly _partnersService;
    constructor(_partnersService: PartnerService);
    createPartner(categoriDTO: PartnerDTO): Promise<any>;
    updateCompany(categoriDTO: PartnerDTO, IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    deleteCompany(IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findByCompany(categoriDTO: PartnerDTO): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    findById(IdPartner: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
    getPartnerByCategory(categoryId: any): Promise<import("../../shared/utils/IResponse.util").IResponse>;
}
