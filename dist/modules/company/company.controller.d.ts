import { CompanyService } from './company.service';
import { CompanyDTO } from './dtos/componey.dto';
export declare class CompanyController {
    private readonly _companyService;
    constructor(_companyService: CompanyService);
    createCompany(customerDTO: CompanyDTO): Promise<any>;
}
