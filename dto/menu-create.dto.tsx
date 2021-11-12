import { ImageBlock } from "./image-create.dto";

export interface MenuDTO {
    id : string,
    orderList: number,
    catagory: string,
    title: string,
    content: string,
    image: any
}

export interface MenuCreateDTO extends Omit<MenuDTO, "id">{
    id? : string
}

export interface MenuDelelteDTO {
    id: string,
    catagory: string
}