import { Title1, Title4, Title5, PageFullWidthLayout, Title2, Title3 } from '../../components/GlobalComponents';
import styled from 'styled-components';
import React from 'react';
import PageMainTitle from '../../components/PageMainTitle';
import { GetStaticProps } from 'next';
import { PageTitleDTO } from '../../dto/page-title.dto';
import brandMainImage from '../../public/brandMain.png'

interface RoundProp {
    value: string
}
interface Props {
    PageTitle: PageTitleDTO
}
const Brand = ({ PageTitle }: Props) => {
    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout>
                <Section1>
                    <Title1 style={{lineHeight:"130%", marginBottom:"35px"}}>비오키친은<br />다이어트푸드 전문키친입니다.</Title1>
                    <Title4>
                        <ul>
                            <li>
                                현대인들에게 다이어트와 건강관리는 이제 일상이 되었습니다.
                            </li>
                            <li>
                                다이어트와 건강관리에 도움이 되면서도 맛있는 한끼를 먹을 순 없을까?
                            </li>
                            <li>
                                라는 생각이 비오키친의 시작입니다.
                            </li>
                        </ul>
                    </Title4>
                </Section1>
            </PageFullWidthLayout>
            <PageFullWidthLayout>
                <PageMain>
                    <Section2>
                        <ul>
                            <li>
                                ICON
                            </li>
                            <li>
                                <Title3>기본과 트렌드를 동시에</Title3>
                            </li>
                            <li>
                                <Title2>건강하고 맛있는 다이어트푸드를 지속적으로 선보입니다 </Title2>
                            </li>
                            <li>
                                <Title5>비오키친에서는 전통적인 다이어트 도시락과 새롭게 떠오르는 다이어트 메뉴들이 공존합니다.
                                        다이어터들의 필요와 즐거움을 충족시킬 수 있는 다양한 메뉴들을 지속적으로 고민합니다. </Title5>
                            </li>
                            <li>
                                이미지
                            </li>
                        </ul>
                        <ul>
                            <li>
                                ICON
                            </li>
                            <li>
                                <Title3>청결하고 꼼꼼하게</Title3>
                            </li>
                            <li>
                                <Title2>비오키친이 선별하는 산지직송의 신선한 식자재 </Title2>
                            </li>
                            <li>
                                <Title5>현미는 철원산지에서, 호박고구마는 당진에서, 사과는 청송에서! 산지직송 식자재를 직접 관리합니다.
                                        정확한 개량의 조리법으로 조리됩니다. 내 가족이 먹는다는 마음으로 청결하고 꼼꼼하게 운영합니다.</Title5>
                            </li>
                            <li>
                                이미지
                            </li>
                        </ul>
                    </Section2>
                </PageMain>
            </PageFullWidthLayout>
            <PageFullWidthLayout>
                <ul>
                    <li>
                        1960년대부터 유행한 원푸드다이어트, 디톡스다이어트부터 현재 유행하는 간헐적단식까지
                    </li>
                    <li>
                        무수히 많은 다이어트 식단이 개발되고 퍼져 왔습니다. 그러나 중요한 것은 다이어트에 관한 나만의 신념을 가지는 것입니다.
                    </li>
                    <li>
                        비오키친은 변화가 심한 다이어트 트렌드 속 에서도 건강을 위하는 다이어트의 본질을 지킵니다.
                    </li>
                </ul>
                <ul>
                    <li>
                        <div>
                            이미지
                        </div>
                        <Title4>다이어트는 지속됩니다</Title4>
                    </li>
                    <li>
                        <div>
                            이미지
                        </div>
                        <Title4>다이어트푸드 전문키친, 비오키친</Title4>
                    </li>
                    <li>
                        <div>
                            이미지
                        </div>
                        <Title4>비오키친은 지속됩니다</Title4>
                    </li>
                </ul>
                <ul>
                    <li><Title3>건강한 식습관, 비오키친</Title3></li>
                    <li><Title4>Diet, Ever and ever</Title4></li>
                </ul>
            </PageFullWidthLayout>
        </>
    );
};


const PageMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 69vh;
`

const ContentWrap = styled.div`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
`;

const ContentUnit = styled.p`
    @media only screen and (max-width: 600px) {
        padding: 0px 50px;
    }
    @media only screen and (min-width: 600px) {
        padding: 0px 100px;
    }
    @media only screen and (min-width: 992px) {
        padding: 0px 200px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 0px 300px;
    }
`

const StepList = styled.ul`
    list-style: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 0px;
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 690px;
    background-color: black;
    color: white;
    * > li {
        line-height: 130%;
    }
`

const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1380px;
    background: linear-gradient(180deg, #ffffff 50%, rgb(227, 181, 159, 0.4) 50%);
    ul {
        width: 550px;
        border: 3px solid #15AA5A;
        margin: 5px;
        padding: 20px;
    }
    ul > li {
    }
`

const RoundBorder = styled.div`
    display: table-cell;
    vertical-align: middle;
    border-radius: 100%;
    font-weight: 700px;
    text-align: center;
    border : 2px solid #175436;
    position: relative;
    @media only screen and (max-width: 600px) {
        padding: 10px;
        width: 140px;
        height: 140px;
        ::after{
            transform: rotate(90deg);
            top: 150px;
        }
    }
    @media only screen and (min-width: 600px) {
        padding: 10px;
        width: 180px;
        height: 180px;
        ::after{
            left: 190px;
            top: calc(180px / 2);
        }
    }
    @media only screen and (min-width: 768px) {
        padding: 10px;
        width: 200px;
        height: 200px;
        ::after{
            left: 210px;
            top: calc(200px / 2);
        }
    }
    @media only screen and (min-width: 992px) {
        padding: 10px;
        width: 250px;
        height: 250px;
        ::after{
            left: 260px;
            top: calc(250px / 2);
        }
    }

    ::after{
        content: '';
        position: absolute;
        background: url('https://www.subway.co.kr/images/common/icon_arr_r02.png') 0 0 no-repeat;
        width: 6px;
        height: 11px;
    }
`

const StepListItem = styled.li`
    display: table;
    float: left;
    margin-right: 30px;
    @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
    margin-right: 0px !important;
    float: none !important;
    }
    &:last-child > ${RoundBorder}::after{
        content:none;
    }
`;


export const getStaticProps: GetStaticProps = async (context) => {
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Brand');
    const PageTitle: PageTitleDTO = await resPageTitle.json();

    if (!PageTitle) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            PageTitle
        }

    }
}
export default Brand;