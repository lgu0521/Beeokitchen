import React, { useEffect, useCallback } from "react";
import GridBox from "../components/GridBox";
import Head from 'next/head';
import { PageMaxNoCSSLayout, PromotionTitle1, PromotionTitle2, PageFullWidthLayout, Title3, Title2, Title4, Title5, Title1, } from "../components/GlobalComponents";
import PageMainTitle from "../components/PageMainTitle";
import StartUpModal from "../components/StartUpModal/StartUpModal";
import styled from "styled-components";
import { PageTitleDTO } from "../dto/page-title.dto";
import { GetServerSideProps } from "next";
import { FranChiseDTO } from "../dto/franchise.dto";
import { useRouter } from "next/router";
import StrengthSection from "../containers/franchise/Strength";
import DeliveryContent from "../containers/franchise/DeliveryContent";
import PcWrapper from "../components/PcWrapper";
import MbWrapper from "../components/MbWrapper";

interface Props {
  franchises: FranChiseDTO[];
  PageTitle: PageTitleDTO;
}

const StartUpPage = ({ franchises, PageTitle }: Props) => {
  return (
    <>
      <Head>
        <title>비오키친 프랜차이즈</title>
        <meta name="description" content="비오키친과 함께 건강한 식문화를 만들어가실 점주님과의 패밀리십 체결을 희망합니다." />
        <link rel="canonical" href="https://www.xn--9w3b27lmmhzmc.kr/franchise" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비오키친 프랜차이즈" />
        <meta property="og:site_name" content="비오키친 프랜차이즈" />
        <meta property="og:url" content="https://www.xn--9w3b27lmmhzmc.kr/franchise" />
        <meta property="og:image" content="/story-sub1.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="비오키친과 함께 건강한 식문화를 만들어가실 점주님과의 패밀리십 체결을 희망합니다." key="description" />
      </Head>
      <PageMainTitle {...PageTitle} />
      <PageFullWidthLayout>
        <BackgroundWrap>
          <PageMaxNoCSSLayout>
            <Container>
              <Content>
                <PromotionTitle2>2022년, 비오키친 지원</PromotionTitle2>
                <PromotionTitle1 style={{ fontWeight: 700 }}> 창업혜택 안내</PromotionTitle1>
              </Content>
              <PcWrapper>
                <Title2 style={{ fontWeight: 300 }}>2020년, 2021년 코로나 상황 속에서도<br />
                많은 분들의 사랑으로 빠르게 성장했습니다.
              </Title2>
                <Title2 style={{ fontWeight: 300 }}>감사의 마음을 담았습니다.</Title2>
              </PcWrapper>
              <MbWrapper>
                <Title2 style={{ fontWeight: 300 }}>2020년, 2021년 코로나 상황 속에서도 많은 분들의 사랑으로 빠르게 성장했습니다.</Title2>
                <Title2 style={{ fontWeight: 300 }}>감사의 마음을 담았습니다.</Title2>
              </MbWrapper>
            </Container>
          </PageMaxNoCSSLayout>
        </BackgroundWrap>
      </PageFullWidthLayout>
      <PageFullWidthLayout>
        <PageMaxNoCSSLayout>
          <StrengthSection />
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
      <PageFullWidthLayout>
        <PageMaxNoCSSLayout>
          <Wrap>
            <Title2 style={{ fontWeight: 600, color: "#03502C" }}>
              가맹절차
            </Title2>
          </Wrap>
          <GridBox
            boxItems={franchises}
            col={4}
            mdCol={3}
            smCol={2}
            height="100px"
          />
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
      <PageMaxNoCSSLayout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <Wrap>
            <StyleTitle2
              style={{ fontWeight: 600, color: "#03502C"}}
            >
              예상투자비용
          </StyleTitle2>
          </Wrap>
          <Table>
            <caption
              style={{
                textAlign: "right",
                color: "#03502C",
                fontWeight: 600,
                marginBottom: "5px",
              }}
            >
              <Title4>*단위 : 만원</Title4>
            </caption>
            <Thead>
              <tr>
                <th scope="col">
                  <Title3>항목</Title3>
                </th>
                <th scope="col">
                  <Title3>금액</Title3>
                </th>
                <th scope="col">
                  <Title3>내용</Title3>
                </th>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <th scope="row">
                  <Title3>가맹비</Title3>
                </th>
                <td>
                  <Title2>300</Title2>
                </td>
                <td>
                  <Title3>부가세별도, 소멸성</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>교육비</Title3>
                </th>
                <td>
                  <Title2>500</Title2>
                </td>
                <td>
                  <Title3>부가세별도, 소멸성</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>계약이행보증금</Title3>
                </th>
                <td>
                  <Title2>200</Title2>
                </td>
                <td>
                  <Title3>부가세없음</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어(15평 기준)</Title3>
                </th>
                <td>
                  <Title2>3,000</Title2>
                </td>
                <td>
                  <Title3>1평=3.3제곱미터(평 당 200만원), 부가세별도</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어 외</Title3>
                </th>
                <td>
                  <Title2>1,530</Title2>
                </td>
                <td>
                  <Title3>간판, 가구, 사인몰, 인쇄물 등, 부가세별도 </Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>주방설비&집기류</Title3>
                </th>
                <td>
                  <Title2>2,600</Title2>
                </td>
                <td>
                  <Title3>부가세별도</Title3>
                </td>
              </tr>
            </Tbody>
            <Tfoot>
              <tr>
                <th scope="row">
                  <Title3>합계</Title3>
                </th>
                <td>
                  <Title2>8,130</Title2>
                </td>
                <td>
                  <Title3 style={{ fontWeight: 700 }}>
                    총 비용은 경우에 따라 변동 될 수 있습니다.
                  </Title3>
                </td>
              </tr>
            </Tfoot>
          </Table>
          <ContentFooter>
            <TextUl>
              <li>
                <Title5>
                  별도 : 가스 / 소방 / 전기증설 / 냉난방 / 테라스 / 철거 / 화장실 등
              </Title5>
              </li>
              <li>
                <Title5>
                  가맹비,교육비,보증금 외 비용은 현장상황에 따라 상이할 수 있습니다.
              </Title5>
              </li>
              <li>
                <Title5>
                  매장 상황에 따라 인테리어, 주방설비 등은 변동 될 수 있습니다.
              </Title5>
              </li>
            </TextUl>
            <DeliveryContent />
          </ContentFooter>
      </PageMaxNoCSSLayout>
      <PageFullWidthLayout style={{ backgroundColor: "#F9F0EC" }}>
        <Wrap>
          <Title2 style={{ fontWeight: 600, color: "#03502C" }}>
            가맹상담 신청서
          </Title2>
        </Wrap>
        <PageMaxNoCSSLayout>
          <StartUpModal />
        </PageMaxNoCSSLayout>
      </PageFullWidthLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/franchise"
  );
  const franchises: FranChiseDTO = await res.json();

  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/StartUp"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!PageTitle && !franchises) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      PageTitle,
      franchises
    },
  };
};

const ContentFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
  margin-bottom: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media only screen and (max-width: 600px) {
    height: 350px;
  }
  @media only screen and (min-width: 600px) {
    height: 490px;
  }
  @media only screen and (min-width: 768px) {
    height: 590px;
  }
  @media only screen and (min-width: 992px) {
    height: 690px;
  }
`;

const Content = styled.div`
  letter-spacing: 10px !important;
  @media only screen and (max-width: 600px) {
      margin-bottom: 30px;
  }
  @media only screen and (min-width: 600px) {
      margin-bottom: 40px;
  }
  @media only screen and (min-width: 768px) {
      margin-bottom: 50px;
  }
  @media only screen and (min-width: 992px) {
      margin-bottom: 60px;
  }
`
const StyleTitle2 = styled(Title2)`
    @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const TextUl = styled.ul`
  list-style: disc;
  text-align: left;
  font-weight: 600;
  line-height: 130%;
  padding: 15px 20px;
  li {
    margin-top: 7px;
  }
`;

const Wrap = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 90px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 110px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 150px;
  }
`;

export const Table = styled.table`
  width: 100%;
  line-height: 22px;
  text-align: left;
  overflow-y: scroll;
  tr {
    vertical-align: middle;
    border-top: 0.5px solid #008b48;
    @media only screen and (max-width: 600px) {
      height: 50px;
    }
    @media only screen and (min-width: 600px) {
      height: 69px;
    }
  }
  th,
  td {
    padding: 0 15px;
    vertical-align: middle;
  }
  th {
    font-weight: 600;
  }
  td:nth-child(2) {
    font-weight: 300;
  }
  td:nth-child(3) {
    font-weight: 500;
  }
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead`
  border-top: 5px solid #009223;
  border-bottom: 3px solid #009223;
  tr > th {
    font-weight: 800;
  }
`;

export const Tfoot = styled.tfoot`
  background-color: #f9f0ec;
  color: #cc3d3d;
  tr > th {
    font-weight: 600;
  }
  tr {
    border: 0px;
  }
`;
// 이미지 스크롤시, position: pixed 수정해야함
const BackgroundWrap = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("/startupBackground.png");
  @media only screen and (max-width: 600px) {
    background-attachment: initial !important;
    background-image: url("/franchise_background_moblie.png");
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  border: 1px solid #888;
  height: 70%;
  border-radius: 20px;
  border: 0px;
  display: table;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    padding: 20px;
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px;
    width: 50%;
  }
`;
export default StartUpPage;
