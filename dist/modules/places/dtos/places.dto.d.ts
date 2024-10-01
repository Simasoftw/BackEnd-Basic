/// <reference types="multer" />
export declare class PlaceDTO {
    description: string;
    name: string;
    images: any[];
    longitud: number;
    latitud: number;
    autor?: string;
    openingDate?: Date;
    dedication?: string;
    reference?: string;
    referencePhoto?: string;
    mainTypology?: string;
    secondaryTypology?: string;
    advocacy?: string;
    status: string;
    address: string;
    audio: Express.Multer.File;
    companyId: string;
}
