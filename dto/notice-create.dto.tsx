export interface NoticeDTO {
    title: string,
    content: string,
    datetime: string
}

export interface NoticeCreateDTO extends NoticeDTO {}

export interface NoticeDeleteDTO {
    id: string
}

export interface NoticeModifyDTO extends NoticeDTO {
    id: string,
}

export interface NoticeListDTO extends NoticeDTO {
    id: string
}