import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './dtos/users.dto';
import { Roles } from '../auth/utils/roles.decorador';
import { Role } from '../auth/utils/rol. enum';
import { UsersService } from './users.service';
import { UserAdminDTO } from './dtos/users-admin.dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userSevices: UsersService
    ){}

    @Post("/insertar")
    async insertar(@Body() userDTO: UserDTO) {
        return await this.userSevices.insertar(userDTO);
    }

    @Post("/register")
    async register(@Body() userDtoAdmin: UserAdminDTO) {
        return await this.userSevices.registerUserAdmin(userDtoAdmin);
    }

    @Get('/listarPorId/:idUsuario') 
    async listarPorId(@Param('idUsuario') idUsuario){
        return await this.userSevices.gestClientById(idUsuario) 
    }

    @Put('/actualizar/:idUsuario')
    async actualizar(@Param('idUsuario') idUsuario,  @Body() userDTO: UserDTO) {
       return await this.userSevices.update(userDTO, idUsuario);
    } 
}
