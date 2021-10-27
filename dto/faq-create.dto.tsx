export interface FaqDTO {
    order: number,
    title: string,
    content: string
}

export interface FaqCreateDTO extends FaqDTO { }

export interface FaqDeleteDTO {
    id: string
}

export interface FaqListDTO extends FaqDTO{
    id: string
}

export interface FaqModifyDTO extends FaqDTO{
    id: string
}