import { Body, Controller, Get, Param, Post, Delete, Put, UseGuards } from '@nestjs/common';
import { CategoriService } from './categories.service';
import { CategoriDTO } from './dtos/categories.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Controller('categories')
export class CategoriController {
    constructor(
        private readonly _categoriesService: CategoriService
    ){}

    @UseGuards(AuthGuard)
    @Post("/create")
    async createCategori (@Body() categoriDTO: CategoriDTO) { 
        return await this._categoriesService.createCategori(categoriDTO);
    }

    @UseGuards(AuthGuard)
    @Put("/update/:IdCategori")
    async updateCompany (@Body() categoriDTO: CategoriDTO,@Param('IdCategori') IdCategori) { 
        return await this._categoriesService.update(categoriDTO, IdCategori);
    }

    @Delete("/delete/:IdCategori")
    async deleteCompany (@Param('IdCategori') IdCategori) { 
        return await this._categoriesService.delete(IdCategori);
    }

    @UseGuards(AuthGuard)
    @Post("/findbyCompany")
    async findByCompany (@Body() categoriDTO: CategoriDTO) { 
        return await this._categoriesService.filterCategoriByCompany(categoriDTO);
    }

    @Get("/findById/:IdCategori")
    async findById (@Param('IdCategori') IdCategori) { 
        return await this._categoriesService.getCategoriById(IdCategori);
    }
}
