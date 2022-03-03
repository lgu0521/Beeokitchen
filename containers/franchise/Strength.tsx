import { PromotionTitle1, Title1, Title2, Title3, Title4 } from "../../components/GlobalComponents"
import CheckIcon from '../../public/franchise-check.svg';
import Title from '../../public/franchise-strength-title.svg';
import SubIcon1 from '../../public/franchise-strength-subIcon1.svg';
import SubIcon2 from '../../public/franchise-strength-subIcon2.svg';
import SubIcon3 from '../../public/franchise-strength-subIcon3.svg';
import Icon from '../../public/franchise-strength-icon.svg';
import Image from 'next/image';
import styled from "styled-components";
const StrengthSection = () => {
    return (
        <>
            <Container>
                <ContentHeader>
                    <StyledPromotionTitle1><span>20호점까지</span> 지원합니다</StyledPromotionTitle1>
                    <TextWrapper>
                        <Title1>가맹비 <span>무료</span></Title1>
                        <Title1>점포선정 컨설팅비 <span>무료</span></Title1>
                    </TextWrapper>
                </ContentHeader>
                <ContentMain>
                    <Line />
                    <Image src={Icon} width={110} height={110} alt="로고" />
                </ContentMain>
                <ContentFooter>
                    <TitleImage>
                        <Image src={Title} width={423} height={114} alt="비오키친 창업강점" />
                    </TitleImage>
                    <ul>
                        <li>
                            <StyledTitle3>건강식단은 세계적인 흐름</StyledTitle3>
                            <Title2 style={{ fontWeight: 600 }}>다이어트푸드 전문점<br /> 비오키친은<br /> 롱런이 가능합니다</Title2>
                            <StyleImage>
                                <Image src={SubIcon1} width={200} height={200} alt="건강식단은 세계적인 흐름 설명 아이콘" />
                            </StyleImage>

                            <Title4>유행을 반영한 트렌디한 메뉴와 클래식한 메뉴가 공존합니다.
                            한국인의 소울푸드 김밥부터 중동식 메뉴 후무스까지, 한계없는 카테고리의 다양한 메뉴를 비오키친만의 노하우로 재해석해
                            지속적인 다이어트 신메뉴를 출시합니다
                            </Title4>
                        </li>
                        <li>
                            <StyledTitle3>선정, 매장오픈&운영까지</StyledTitle3>
                            <Title2 style={{ fontWeight: 600 }}>비오키친의<br /> 탄탄한 경영지원이<br /> 함께 합니다</Title2>
                            <StyleImage>
                                <Image src={SubIcon2} width={200} height={200} alt="선정, 매장오픈&운영까지 설명 아이콘" />
                            </StyleImage>
                            <Title4>해당지점 슈퍼바이저가 점주님과의 인간적인 관계를 추구합니다.
                            조리부터  마케팅,인사,경영까지 꼼꼼하게 지속적으로 컨설팅해 드리는
                            탄탄한 경영지원으로 점주님들의 매출향상에  집중합니다.
                            </Title4>
                        </li>
                        <li>
                            <StyledTitle3>외식업에서 가장 중요한 식재료</StyledTitle3>
                            <Title2 style={{ fontWeight: 600 }}>안정적인<br /> 물류공급 시스템을<br /> 갖추고 있습니다</Title2>
                            <StyleImage>
                                <Image src={SubIcon3} width={200} height={200} alt="외식업에서 가장 중요한 식재료 설명 아이콘" />
                            </StyleImage>

                            <Title4>삼성 웰스토리와의 B2B계약으로 안정적인 물류공급 시스템을
                            갖추고 있으며 이는 물류비 마진을 최소화하여
                            가맹점주님의 이익 극대화를 추구하는 것이 목적입니다.
                            </Title4>
                        </li>
                    </ul>
                </ContentFooter>
            </Container>
        </>
    )
}

const StyledTitle3 = styled(Title3)`
    margin-bottom: 10px;
    font-weight: ${(props) => props.theme.fontWeight.SemiBold};
`

const StyledPromotionTitle1 = styled(PromotionTitle1)`
    margin-bottom: 30px;
    span{
        color: white;
        font-weight: ${(props) => props.theme.fontWeight.SemiBold};
        background-color: #CC3D3D;
        border-radius: 40px;
        padding: 7px 25px;
        line-height: 1.7;
    }
`
const Container = styled.div`
    @media only screen and (max-width: 600px) {
        padding-top: 60px;
    }
    @media only screen and (min-width: 600px) {
        padding-top: 80px;
    }
    @media only screen and (min-width: 768px) {
        padding-top: 130px;
    }
`
const ContentHeader = styled.div`

`

const TitleImage = styled.div`
    @media only screen and (max-width: 600px) {
        padding-top: 60px !important;
    }
    @media only screen and (min-width: 600px) {
        padding-top: 80px !important;
    }
    @media only screen and (min-width: 768px) {
        padding-top: 130px !important;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-weight: ${(props) => props.theme.fontWeight.SemiBold};
    }
    h1{
        position: relative;
        ::before{
            position: absolute;
            content: '';
            background-size: cover !important;
            background:url("/franchise-check.svg") no-repeat center;
            @media only screen and (max-width: 600px) {
                width: 23px;
                height: 25px;
                top: -8px;
                left: -25px;
            }
            @media only screen and (min-width: 600px) {
                width: 33px;
                height: 38px;
                top: -11px;
                left: -40px;
            }
            @media only screen and (min-width: 992px) {
                width: 42px;
                height: 47px;
                top: -10px;
                left: -55px;
            }
        }
    }

`
const ContentMain = styled.div`

`
const ContentFooter = styled.div`

 ul{
     display: grid;
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 10px;
        padding-top: 0px !important;
    }
    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding-top: 15px !important;
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding-top: 20px !important;
    }
 }
 li{
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
     text-align: left;
     width: 100%;
     background-color: #008B48;
     color: white;
     padding: 30px 32px;
 }
`

const StyleImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    img{
    @media only screen and (max-width: 600px) {
        padding: 40px 0px !important;
    }
    @media only screen and (min-width: 600px) {
        padding: 50px 0px !important;
    }
    @media only screen and (min-width: 768px) {
        padding: 70px 0px !important;
    }
 }
`

const Line = styled.hr`
    width: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 0px;
    border-left: 4px solid #006F39;
    @media only screen and (max-width: 600px) {
        height: 150px;
        margin-bottom: 18px;
        margin-top: 10px;
    }
    @media only screen and (min-width: 600px) {
        height: 200px;
        margin-bottom: 23px;
        margin-top: 13px;
    }
    @media only screen and (min-width: 992px) {
        height: 245px;
        margin-bottom: 25px;
        margin-top: 15px;
    }
`

export default StrengthSection;