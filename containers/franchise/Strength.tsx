import { NEW_Title2, PromotionTitle1, PromotionTitle3, Title1, Title2, Title3, Title4, Title5 } from "../../components/GlobalComponents"
import CheckIcon from '../../public/franchise-check.svg';
import Title from '../../public/2022/franchise.svg';
import SubIcon1 from '../../public/franchise-strength-subIcon1.svg';
import SubIcon2 from '../../public/franchise-strength-subIcon2.svg';
import SubIcon3 from '../../public/franchise-strength-subIcon3.svg';
import Icon from '../../public/franchise-strength-icon.svg';
import Image from 'next/image';
import styled from "styled-components";
import PcWrapper from "../../components/PcWrapper";
import MbWrapper from "../../components/MbWrapper";
const StrengthSection = () => {
    return (
        <>
            <Container>
                <ContentHeader>
                    <PcWrapper>
                        <NEW_Title2><strong>건강을 키우는 푸드키친 : 헬키푸키</strong></NEW_Title2>
                        <NEW_Title2 style={{ marginTop: "5px" }}><strong>Healthy food kitchen, Helkipooki</strong></NEW_Title2>
                        <NEW_Title2 style={{ marginTop: "100px" }}>
                            헬키푸키는 외식문화의 시대적 흐름을 놓치지 않으면서도<br/>
                            한국인들 입맛에 맞춘 다이어트푸드의 영역을 개척해 나가고 있습니다.
                        </NEW_Title2>
                        <NEW_Title2 style={{ marginTop: "50px" }}>
                            2021년 용인점 오픈 이후 지속적인 신메뉴개발과 업데이트,<br/>
                            유연한 판매채널의 확장과 프로모션을 통해 고객들의 폭팔적인 호응을 얻으며<br/>
                            현재 경기/서울지역까지 빠르게 성장 중입니다.</NEW_Title2>
                    </PcWrapper>
                    <MbWrapper style={{textAlign: "left"}}>
                        <NEW_Title2><strong>건강을 키우는 푸드키친 : 헬키푸키</strong></NEW_Title2>
                        <NEW_Title2 style={{ marginTop: "5px" }}><strong>Healthy food kitchen, Helkipooki</strong></NEW_Title2>
                        <NEW_Title2 style={{ marginTop: "30px" }}>
                            헬키푸키는 외식문화의 시대적 흐름을 놓치지 않으면서도
                            한국인들 입맛에 맞춘 다이어트푸드의 영역을 개척해 나가고 있습니다.<br />
                            2021년 용인점 오픈 이후 지속적인 신메뉴개발과 업데이트,
                            유연한 판매채널의 확장과 프로모션을 통해 고객들의 폭팔적인 호응을 얻으며
                            현재 경기/서울지역까지 빠르게 성장 중입니다.
                        </NEW_Title2>
                        {/* <StyledPromotionTitle1><span>20호점까지</span> 지원합니다</StyledPromotionTitle1> */}
                        {/* <TextWrapper>
                        <PromotionTitle3>가맹비&교육비 <span>할인</span></PromotionTitle3>
                        <PromotionTitle3>점포선정 컨설팅비 <span>무료</span></PromotionTitle3>
                    </TextWrapper> */}
                    </MbWrapper>
                </ContentHeader>
                <ContentMain>
                    <Line />
                    <PcWrapper>
                        <Image src={Icon} width={110} height={110} alt="로고" objectFit="cover" />
                    </PcWrapper>
                    <MbWrapper>
                        <Image src={Icon} width={50} height={50} alt="로고" objectFit="cover" />
                    </MbWrapper>
                </ContentMain>
                <ContentFooter>
                    <TitleImage>
                        <Image src={Title} width={504} height={120} alt="헬키푸키 창업강점" />
                    </TitleImage>
                    <ul>
                        <li>
                            <StyledTitle3>건강식단은 세계적인 흐름</StyledTitle3>
                            <PcWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">다이어트푸드 전문점<br /> 헬키푸키은<br /> 롱런이 가능합니다</Title2>
                            </PcWrapper>
                            <MbWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">다이어트푸드 전문점 헬키푸키은<br /> 롱런이 가능합니다</Title2>
                            </MbWrapper>
                            <StyleImage>
                                <Image src={SubIcon1} width={200} height={200} alt="건강식단은 세계적인 흐름 설명 아이콘" />
                            </StyleImage>
                            <Title4 color="#fff">유행을 반영한 트렌디한 메뉴와 클래식한 메뉴가 공존합니다.
                                한국인의 소울푸드 김밥부터 중동식 메뉴 후무스까지, 한계없는 카테고리의 다양한 메뉴를 헬키푸키만의 노하우로 재해석해
                                지속적인 다이어트 신메뉴를 출시합니다
                            </Title4>
                        </li>
                        <li>
                            <StyledTitle3>선정, 매장오픈&운영까지</StyledTitle3>
                            <PcWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">헬키푸키의<br /> 탄탄한 경영지원이<br /> 함께 합니다</Title2>
                            </PcWrapper>
                            <MbWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">헬키푸키의 탄탄한 경영지원이<br /> 함께 합니다</Title2>
                            </MbWrapper>
                            <StyleImage>
                                <Image src={SubIcon2} width={200} height={200} alt="선정, 매장오픈&운영까지 설명 아이콘" />
                            </StyleImage>
                            <Title4 color="#fff">해당지점 슈퍼바이저가 점주님과의 인간적인 관계를 추구합니다.
                                조리부터  마케팅,인사,경영까지 꼼꼼하게 지속적으로 컨설팅해 드리는
                                탄탄한 경영지원으로 점주님들의 매출향상에  집중합니다.
                            </Title4>
                        </li>
                        <li>
                            <StyledTitle3>외식업에서 가장 중요한 식재료</StyledTitle3>
                            <PcWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">안정적인<br /> 물류공급 시스템을<br /> 갖추고 있습니다</Title2>
                            </PcWrapper>
                            <MbWrapper>
                                <Title2 style={{ fontWeight: 600 }} color="#fff">안정적인 물류공급 시스템을<br /> 갖추고 있습니다</Title2>
                            </MbWrapper>

                            <StyleImage>
                                <Image src={SubIcon3} width={200} height={200} alt="외식업에서 가장 중요한 식재료 설명 아이콘" />
                            </StyleImage>

                            <Title4 color="#fff">삼성 웰스토리와의 B2B계약으로 안정적인 물류공급 시스템을
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
    margin-top: 5.7vh;
    margin-bottom: 30px;
    span{
        color: white;
        font-weight: ${(props) => props.theme.fontWeight.SemiBold};
        background-color: #CC3D3D;
        border-radius: 40px;
        padding: 7px 25px;
        line-height: 1.7;
        @media only screen and (max-width: 600px) {
            padding: 7px 12px;
        }
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
        padding-top: 18px !important;
        padding-left: 36px !important;
        padding-right: 36px !important;
    }
    @media only screen and (min-width: 600px) {
        padding-top: 25px !important;
    }
    @media only screen and (min-width: 768px) {
        padding-top: 35px !important;
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
                top: -1px;
                left: -25px;
            }
            @media only screen and (min-width: 600px) {
                width: 33px;
                height: 38px;
                top: 4px;
                left: -40px;
            }
            @media only screen and (min-width: 992px) {
                width: 42px;
                height: 47px;
                top: 3px;
                left: -55px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        margin-top: 28px;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 45px;
    }
    @media only screen and (min-width: 992px) {
        margin-top: 50px;
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
        padding-top: 15px !important;
    }
    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding-top: 30px !important;
    }
    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding-top: 40px !important;
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
     @media only screen and (max-width: 600px) {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
 }
`

const StyleImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    img{
        @media only screen and (max-width: 600px) {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
            padding-left: 50px !important;
            padding-right: 50px !important;
        }
        @media only screen and (min-width: 600px) {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
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
    @media only screen and (max-width: 600px) {
        height: 150px;
        margin-bottom: 18px;
        margin-top: 16px;
        border-left: 2px solid #006F39;
    }
    @media only screen and (min-width: 600px) {
        height: 200px;
        margin-bottom: 25px;
        margin-top: 16px;
        border-left: 3px solid #006F39;
    }
    @media only screen and (min-width: 992px) {
        height: 245px;
        margin-bottom: 30px;
        margin-top: 16px;
        border-left: 4px solid #006F39;
    }
`

export default StrengthSection;