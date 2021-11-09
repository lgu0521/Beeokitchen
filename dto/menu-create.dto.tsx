import { ImageBlock } from "./image-create.dto";

export interface MenuDTO extends ImageBlock{
    catagory: string,
    title: string,
    content: string
}

export interface MenuCreateDTO extends MenuDTO {
    tmpUrl: File[],
}

export interface MenuDelelteDTO {
    id: string,
    catagory: string
}

export interface MenuListDTO extends MenuDTO {
    id: string,
}


export interface MenuModifyDTO extends MenuDTO {
    id: string,
}