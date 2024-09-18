import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDTO } from './dtos/componey.dto';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly _companyService: CompanyService
    ){}

    @Post("/create")
    async createCompany (@Body() customerDTO: CompanyDTO) { 
        return await this._companyService.createCompany(customerDTO);
    }
}
