import { Title1, Title2,Title3, Content, PageFullWidthLayout } from '../../components/GlobalComponents';
import styled from 'styled-components';
import React from 'react';
import PageMainTitle from '../../components/PageMainTitle';
import { NextComponentType } from 'next';
interface RoundProp {
    value: string
}
const Brand = () => {
    const CONTENT_BOX_STYLE = {
        height: "400px",
        backgroundColor: "white"
    }

    const CONTENT_TITLE_STYLE = {
        marginBottom: "20px",
        display: "block",
        color: "white",
        fontWeight: 700
    }

    const FONT_STYLE = {
        color: "white"
    }
    const Round = ({ value }: RoundProp) => {
        return <RoundBorder><Title3 style={FONT_STYLE}>{value}</Title3></RoundBorder>
    }
    return (
        <>
            <PageMainTitle title="브랜드" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg1.jpg')" }}>
                <ContentWrap>
                    <Title1 style={CONTENT_TITLE_STYLE}>회사 소개</Title1>
                    <Content style={FONT_STYLE}>
                        <ContentUnit>
                            비오키친은 저탄고지 키토김밥과 고단백 저칼로리 다이어트 도시락, 한끼 샐러드 및 0칼로리 이온음료등을 판매하는 다이어트 푸드 전문점입니다.
                        </ContentUnit>
                        <ContentUnit>
                            “건강한 식습관”을 슬로건으로 산지에서 직접 구매한 질 좋은 농산물들과 정확한 개량을 통한 조리법으로 항시 청결하게 운영하고 있습니다. 다이어트와 건강관리는 결국 식습관에 달려있습니다. 식단 관리가 괴로운 것이 아닌 나를 위한 선물이 될 수 있도록 도와드리고 싶습니다. 더 나아가 국민건강에 이바지하고 싶습니다.
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </PageFullWidthLayout>
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg2.jpg')" }}>
                <ContentWrap>
                    <Title1 style={CONTENT_TITLE_STYLE}>식자재</Title1>
                    <Content style={FONT_STYLE}>
                        <ContentUnit>
                            매일 재료를 직접 눈으로 보고 관리합니다. 도시락에 들어가는 현미는 철원 산지에서, 호박고구마는 당진에서, 사과는 청송에서등 최대한 산지직송 식자재를 사용합니다. 내 가족이 먹는다는 마음으로 꼼꼼하게 관리 및 조리하고 있습니다.
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </PageFullWidthLayout>
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg3.jpg')", height: "500px" }}>
                <ContentWrap>
                    <Title1 style={{...CONTENT_TITLE_STYLE, paddingTop: "10px"}}>가능성</Title1>
                    <StepList>
                        <div style={{display: "inline-block"}}>
                        <StepListItem>
                            <Round value="다이어트는 지속됩니다" />
                        </StepListItem>
                        <StepListItem>
                            <Round value="비오키친은 다이어트 푸드 전문점 입니다" />
                        </StepListItem>
                        <StepListItem>
                            <Round value="비오키친은 계속됩니다" />
                        </StepListItem>
                        </div>
                    </StepList>
                </ContentWrap>
            </PageFullWidthLayout>
            <PageFullWidthLayout style={{height: "300px"}}>
                <ContentWrap>
                    <Content>
                        <ContentUnit>
                        1960년대부터 유행한 원푸드 다이어트, 디톡스 다이어트부터 현재 유행하는 간헐적 단식 다이어트까지 무수한 다이어트 방법이 개발되고 사람들 입소문으로 퍼져 왔습니다. <br/>다이어트는 형태가 바뀌며 지속되어왔다는 것을 알 수 있습니다.<br/>앞으로 더 많은 다이어트 방법이 생겨날 것입니다. <br/><br/>하지만 어떠한 다이어트 방법을 선택하는 것에 앞서 다이어트의 첫번 째는 다이어트에 관해 나만의 신념을 가지는 것입니다. <br/>극단적인 다이어트 방법 사이에서 중심을 가져야 합니다. <br/>저희 비오키친은 유행을 타지 않는 다이어트 도시락과 현재 인기 있는 키토제닉 푸드의 조합으로 앞으로도 다이어터들에게 많은 관심과 사랑을 받을 수 있는 강점이 있습니다. 
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </PageFullWidthLayout>
        </>
    );
};




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
export default Brand;