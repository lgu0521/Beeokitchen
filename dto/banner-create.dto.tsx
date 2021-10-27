export interface BannerDTO {
    order: number
    url: string,
 }

export interface BannerCreateDTO extends BannerDTO{
    tmpUrl: File, //JSON.stringify 변환이 불가능 하기때문에 url로 string 저장
}

export interface BannerDeleteDTO{
    id: string,
}

export interface BannerListDTO extends BannerDTO{
    id: string,
}

