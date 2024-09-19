import { IsNotEmpty, IsOptional } from "class-validator";

export class PlaceDTO { 

    @IsOptional() // Cambiado a opcional
    description: string;

    @IsNotEmpty()
    name: string;

    @IsOptional() // Cambiado a opcional
    images: string[]; // Cambiado a un array de cadenas

    @IsNotEmpty()
    longitud: number; // Cambiado de 'longitude' a 'longitud'

    @IsNotEmpty()
    latitud: number; // Cambiado de 'latitude' a 'latitud'

    @IsOptional() // Cambiado a opcional
    autor?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    openingDate?: Date; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    dedication?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    reference?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    referencePhoto?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    mainTypology?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    secondaryTypology?: string; // Agregado como opcional

    @IsOptional() // Cambiado a opcional
    advocacy?: string; // Agregado como opcional


    @IsNotEmpty()
    status: string;

    @IsOptional() // Cambiado a opcional
    address: string;

    @IsOptional() // Cambiado a opcional
    audio?: Blob; // Agregado como opcional

    @IsNotEmpty()
    companyId: string;
}
