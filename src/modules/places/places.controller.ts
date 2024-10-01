import { Body, Controller, Get, Param, Post, Delete, Put, UseGuards, UploadedFiles, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PlaceService } from './places.service';
import { PlaceDTO } from './dtos/places.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('places')
export class PlaceController {
    constructor(
        private readonly _placesService: PlaceService
    ){}

    @UseGuards(AuthGuard)
    @Post('/create')
    @UseInterceptors(FilesInterceptor('images'))
    async createPlace(
        @Body() placeDTO: PlaceDTO,
        @UploadedFiles() files: Express.Multer.File[], 
    ) {

        placeDTO.images = files;

        try {
            const response = await this._placesService.createPlace(placeDTO);
            return response;
        } catch (error) {
            console.error('Error al crear el lugar:', error.message);
            return {
                data: [],
                message: 'Error al crear el lugar.',
                status: 500,
            };
        }
    }

    @UseGuards(AuthGuard)
    @Put("/update/:IdPlace")
    async updateCompany (@Body() categoriDTO: PlaceDTO,@Param('IdPlace') IdPlace) { 
        return await this._placesService.update(categoriDTO, IdPlace);
    }

    @UseGuards(AuthGuard)
    @Delete("/delete/:IdPlace")
    async deleteCompany (@Param('IdPlace') IdPlace) { 
        return await this._placesService.delete(IdPlace);
    }

    @Post("/findbyCompany")
    async findByCompany (@Body() categoriDTO: PlaceDTO) { 
        return await this._placesService.filterPlaceByCompany(categoriDTO);
    }

    @Get("/findById/:IdPlace")
    async findById (@Param('IdPlace') IdPlace) { 
        return await this._placesService.getPlaceById(IdPlace);
    }
}
