import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PartnerService } from './partners.service';
import { PartnerDTO } from './dtos/partners.dto';

@Controller('partners')
export class PartnerController {
    constructor(
        private readonly _partnersService: PartnerService
    ){}


    @Post("/create")
    async createPartner (@Body() categoriDTO: PartnerDTO) { 
        return await this._partnersService.createPartner(categoriDTO);
    }

    
    @Post("/update/:IdPartner")
    async updateCompany (@Body() categoriDTO: PartnerDTO,@Param('IdPartner') IdPartner) { 
        return await this._partnersService.update(categoriDTO, IdPartner);
    }

    @Post("/delete/:IdPartner")
    async deleteCompany (@Param('IdPartner') IdPartner) { 
        return await this._partnersService.delete(IdPartner);
    }

    @Post("/findbyCompany")
    async findByCompany (@Body() categoriDTO: PartnerDTO) { 
        return await this._partnersService.filterPartnerByCompany(categoriDTO);
    }

    @Get("/findById/:IdPartner")
    async findById (@Param('IdPartner') IdPartner) { 
        return await this._partnersService.getPartnerById(IdPartner);
    }


    @Get("/getPartnerByCategory/:categoryId")
    async getPartnerByCategory (@Param('categoryId') categoryId) { 
        return await this._partnersService.getPartnerByCategory(categoryId);
    }


    @Post('/filterPartnersByCategory/') 
    async filterCustomerByUser(@Body() data){
        return await this._partnersService.filterPartnersByCategory(data) 
    }
}
