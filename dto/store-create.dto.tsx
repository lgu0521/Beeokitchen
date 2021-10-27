export interface StoreDTO {
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    url: string[]
}

export interface StoreCreateDTO extends StoreDTO {
    tmpUrl: File[],
}

export interface StoreDeleteDTO {
    id: string
}

export interface StoreModifyDTO extends StoreDTO {
    id: string,
}

export interface StoreAllListDTO extends Omit<StoreDTO, 'url'>{
    id: string,
    url: string
}