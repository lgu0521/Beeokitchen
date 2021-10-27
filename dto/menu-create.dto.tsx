export interface MenuDTO {
    catagory: string,
    title: string,
    content: string,
    url: string
}

export interface MenuCreateDTO extends MenuDTO {
    tmpUrl: File,
}

export interface MenuDelelteDTO extends MenuDTO {
    id: string,
    catagory: string
}

export interface MenuListDTO extends MenuDTO {
    id: string,
}


export interface MenuModifyDTO extends MenuDTO {
    id: string,
}