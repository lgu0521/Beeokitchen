import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../../dto/startup-form.dto";
import GridBox from "../../components/GridBox";
import { PageMaxNoCSSLayout, PageFullWidthLayout, Title3, Title2, Title4 } from "../../components/GlobalComponents";
import PageMainTitle from "../../components/PageMainTitle";
import Style from "../../components/style";
import StartUpModal from '../../components/StartUpModal';
import styled from "styled-components";
import { PageTitleDTO } from "../../dto/page-title.dto";
import { GetStaticProps } from "next";

interface BoxItem {
    step: string,
    procedure: string,
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
    }
]

interface Props {
    PageTitle: PageTitleDTO
}

const StartUpPage = ({ PageTitle }: Props) => {
    const [isFormClick, setIsFormClick] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<StartUpFormDTO>();

    const onSubmit = async (data: StartUpFormDTO) => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/startup-form/create", {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (res) {
            alert("상담 신청이 완료되었습니다");
            setIsFormClick(false);
        }
    }

    const CONTENT_BOX_STYLE = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
    }

    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/startup.png?alt=media&token=522c8666-83d8-446d-8265-434438c14890')" }}>
                <PageMaxNoCSSLayout>
                    <Wrap>
                        <Title2 style={{ fontWeight: 600, color: "#03502C" }}>가맹 절차</Title2>
                    </Wrap>
                    <GridBox boxItems={BoxItems} col={4} mdCol={3} smCol={2} height="100px" />
                </PageMaxNoCSSLayout>
            </PageFullWidthLayout>
            <PageMaxNoCSSLayout style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <ContentWrap>
                    <Title2 style={{ fontWeight: 600, color: "#03502C", marginBottom: "50px" }}>예상투자비용</Title2>
                    <Style.Table>
                        <caption style={{ textAlign: "right", color: "#03502C", fontWeight: 700, marginBottom: "5px" }}>
                            <Title4>*단위 : 만원</Title4>
                        </caption>
                        <Style.Thead>
                            <tr>
                                <th scope="col"><Title3>항목</Title3></th>
                                <th scope="col"><Title3>금액</Title3></th>
                                <th scope="col"><Title3>내용</Title3></th>
                            </tr>
                        </Style.Thead>
                        <Style.Tbody>
                            <tr>
                                <th scope="row"><Title3>가맹비</Title3></th>
                                <td><Title2>300</Title2></td>
                                <td><Title3>부가세별도, 소멸성</Title3></td>
                            </tr>
                            <tr>
                                <th scope="row"><Title3>교육비</Title3></th>
                                <td><Title2>500</Title2></td>
                                <td><Title3>부가세별도, 소멸성<br />교육에 대한  추가 비용 없음</Title3></td>
                            </tr>
                            <tr>
                                <th scope="row"><Title3>인테리어설계(도면,3D)및 감리</Title3></th>
                                <td><Title2>300</Title2></td>
                                <td><Title3>부가세별도, 소멸성</Title3></td>
                            </tr>
                            <tr>
                                <th scope="row"><Title3>인테리어(12평기준)</Title3></th>
                                <td><Title2>3,600</Title2></td>
                                <td><Title3>부가세별도</Title3></td>
                            </tr>
                            <tr>
                                <th scope="row"><Title3>인테리어 외</Title3></th>
                                <td><Title2>2,000</Title2></td>
                                <td><Title3>부가세별도</Title3></td>
                            </tr>
                            <tr>
                                <th scope="row"><Title3>집기&비품</Title3></th>
                                <td><Title2>3,000</Title2></td>
                                <td><Title3>부가세별도</Title3></td>
                            </tr>
                        </Style.Tbody>
                        <Style.Tfoot>
                            <tr>
                                <th scope="row"><Title3>합계</Title3></th>
                                <td><Title2>9,700</Title2></td>
                                <td><Title3 style={{ fontWeight: 700 }}>총 비용은 경우에 따라 변동 될 수 있습니다.</Title3></td>
                            </tr>
                        </Style.Tfoot>
                    </Style.Table>
                    <TextUl>
                        <li>
                            <Title4>별도 : 가스 / 소방 / 전기증설 / 냉난방 / 테라스 / 철거 / 화장실 등</Title4>
                        </li>
                        <li>
                            <Title4>본 인테리어 비용은 이해를 돕기 위한 예상비용으로 현장 실측 후 정확한 비용이 산출됩니다.</Title4>
                        </li>
                        <li>
                            <Title4>매장 상황에 따라 인테리어, 주방설비 등은 변동 될 수 있습니다.</Title4>
                        </li>
                        <li>
                            <Title4>개설가능 최소평수는 12평입니다.</Title4>
                        </li>
                    </TextUl>
                    <Button onClick={() => setIsFormClick(true)}><Title4>가맹 문의하기</Title4></Button>
                </ContentWrap>
            </PageMaxNoCSSLayout>
            {
                isFormClick ?
                    <Style.Modal>
                        <Style.ModalContent>
                          <StartUpModal/>
                        </Style.ModalContent>
                    </Style.Modal>
                    : null
            }
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/page-title/StartUp");
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
`

const TextUl = styled.ul`
    list-style: disc;
    text-align: left;
    font-weight: 600;
    line-height: 130%;
    padding: 10px 20px;
    li {
        margin-top: 7px;
    }
`

const Wrap = styled.div`
    @media only screen and (max-width: 600px) {
        margin-top: 60px;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 80px;
    }
    @media only screen and (min-width: 768px) {
        margin-top: 120px;
    }
`

const Button = styled.button`
    color: #404346;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #F9F0EC;
    border: 2px solid #CC3D3D;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: #CC3D3D;
        color: white;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
`

export default StartUpPage;