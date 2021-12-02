import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../../dto/startup-form.dto";
import GridBox from "../../components/GridBox";
import {
  PageMaxNoCSSLayout,
  PageFullWidthLayout,
  Title3,
  Title2,
  Title4,
  Title5,
} from "../../components/GlobalComponents";
import PageMainTitle from "../../components/PageMainTitle";
import StartUpModal from "../../components/StartUpModal/StartUpModal";
import styled from "styled-components";
import { PageTitleDTO } from "../../dto/page-title.dto";
import { GetStaticProps } from "next";

interface BoxItem {
  step: string;
  procedure: string;
}

const BoxItems: BoxItem[] = [
  {
    step: "Step 01",
    procedure: "가맹창업문의",
  },
  {
    step: "Step 02",
    procedure: "가맹접수 및 상담",
  },
  {
    step: "Step 03",
    procedure: "가맹점개설 본사승인",
  },
  {
    step: "Step 04",
    procedure: "점포실측 및 시행",
  },
  {
    step: "Step 05",
    procedure: "가맹계약의 체결",
  },
  {
    step: "Step 06",
    procedure: "인테리어시공",
  },
  {
    step: "Step 07",
    procedure: "점주교육",
  },
  {
    step: "Step 08",
    procedure: "인허가준비",
  },
  {
    step: "Step 09",
    procedure: "영업준비",
  },
  {
    step: "Step 10",
    procedure: "가맹점 영업계시",
  },
  {
    step: "Step 11",
    procedure: "오픈 및 유지관리",
  },
  {
    step: "Step 12",
    procedure: "사후관리 및 영업지원",
  },
];

interface Props {
  PageTitle: PageTitleDTO;
}

const StartUpPage = ({ PageTitle }: Props) => {
  const [isFormClick, setIsFormClick] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StartUpFormDTO>();

  const onSubmit = async (data: StartUpFormDTO) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/startup-form/create",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (res) {
      alert("상담 신청이 완료되었습니다");
      setIsFormClick(false);
    }
  };

  const CONTENT_BOX_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <PageMainTitle {...PageTitle} />
      <PageFullWidthLayout
        style={{
          ...CONTENT_BOX_STYLE,
          backgroundImage: "url('/startupBackground.png')",
        }}
      >
        <PageMaxNoCSSLayout>
          <Wrap>
            <Title2 style={{ fontWeight: 600, color: "#03502C" }}>
              가맹절차
            </Title2>
          </Wrap>
          <GridBox
            boxItems={BoxItems}
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
        <ContentWrap>
          <Title2
            style={{ fontWeight: 600, color: "#03502C", marginBottom: "50px" }}
          >
            예상투자비용
          </Title2>
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
                  <Title3>
                    부가세별도, 소멸성
                    <br />
                    교육에 대한 추가 비용 없음
                  </Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어설계(도면,3D)및 감리</Title3>
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
                  <Title3>인테리어(12평기준)</Title3>
                </th>
                <td>
                  <Title2>3,600</Title2>
                </td>
                <td>
                  <Title3>부가세별도</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>인테리어 외</Title3>
                </th>
                <td>
                  <Title2>2,000</Title2>
                </td>
                <td>
                  <Title3>부가세별도</Title3>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <Title3>집기&비품</Title3>
                </th>
                <td>
                  <Title2>3,000</Title2>
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
                  <Title2>9,700</Title2>
                </td>
                <td>
                  <Title3 style={{ fontWeight: 700 }}>
                    총 비용은 경우에 따라 변동 될 수 있습니다.
                  </Title3>
                </td>
              </tr>
            </Tfoot>
          </Table>
          <TextUl>
            <li>
              <Title5>
                별도 : 가스 / 소방 / 전기증설 / 냉난방 / 테라스 / 철거 / 화장실
              </Title5>
            </li>
            <li>
              <Title5>
                본 인테리어 비용은 이해를 돕기 위한 예상비용으로 현장 실측 후
                정확한 비용이 산출됩니다.
              </Title5>
            </li>
            <li>
              <Title5>
                매장 상황에 따라 인테리어, 주방설비 등은 변동 될 수 있습니다.
              </Title5>
            </li>
            <li>
              <Title5>개설가능 최소평수는 12평입니다.</Title5>
            </li>
          </TextUl>
        </ContentWrap>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/StartUp"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!PageTitle) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      PageTitle,
    },
  };
};

const ContentWrap = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  @media only screen and (max-width: 600px) {
    margin: 60px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 80px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 120px 0px;
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
  @media only screen and (max-width: 600px) {
    margin-top: 60px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const Table = styled.table`
  width: 100%;
  line-height: 22px;
  text-align: left;
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
  th:nth-child(3),
  td:nth-child(3) {
    @media only screen and (max-width: 600px) {
      display: none;
    }
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
