import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StartUpFormDTO } from "../../dto/startup-form.dto";
import GridBox from "../../components/GridBox";
import { PageLayout, PageFullWidthLayout, Button, Content, Title3, Title1 } from "../../components/GlobalComponents";
import PageMainTitle from "../../components/PageMainTitle";
import Style from "../../components/style";
import { InputForm, Form, ButtonForm, SelectForm } from '../../components/Form';
import styled from "styled-components";
import { PageTitleDTO } from "../../dto/page-title.dto";
import { GetStaticProps } from "next";

interface BoxItem {
    step: string,
    procedure: string,
}

const BoxItems: BoxItem[] = [
    {
        step: "Step.01",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.02",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.03",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.04",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.05",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.06",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.07",
        procedure: "전화 및 방문상담",
    },
    {
        step: "Step.08",
        procedure: "전화 및 방문상담",
    }
]
interface Props {
    PageTitle: PageTitleDTO
}
const StartUpPage = ({PageTitle}:Props) => {
    const [isFormClick, setIsFormClick] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<StartUpFormDTO>();

    const onSubmit = async (data: StartUpFormDTO) => {
        console.log(data);
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
        height: "400px",
        backgroundColor: "white",
        backgroundSize: "cover",
    }

    const CONTENT_TITLE_STYLE = {
        marginBottom: "20px",
        display: "block",
        color: "black",
    }

    const FONT_STYLE = {
        color: "black"
    }
    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/StartupMain%2F%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A2%201%20(1).png?alt=media&token=37e754e9-a781-448a-8ca5-a74478f85d31')" }}>
                <ContentWrap>
                    <Title1 style={CONTENT_TITLE_STYLE}>발로 뛰는 사장님을 모십니다.</Title1>
                    <Content style={FONT_STYLE}>
                        <ContentUnit>
                        세상에 힘들이지 않고 운영되는 매장은 없습니다.
                        </ContentUnit>
                        <ContentUnit>
                            매장 상황을 누구보다 잘 알고, 매장을 직접 꼼꼼하게 관리 해주실 점주님과 패밀리십 체결을 희망합니다.
                        </ContentUnit>
                    </Content>
                </ContentWrap>
            </PageFullWidthLayout>
            <PageLayout>
                <Title1 style={{ fontWeight: 600, color:"#15AA5A" }}>창업 절차</Title1>
                <GridBox boxItems={BoxItems} col={4} mdCol={3} smCol={2} height="100px" />
            </PageLayout>
            <PageLayout>
            <Title1 style={{ fontWeight: 600, color:"#15AA5A" }}>예상 투자비용</Title1>
            <TableBox>
                <Style.Table>
                    <colgroup>
                        <col width="270px" />
                        <col width="270px" />
                        <col width="*" />
                    </colgroup>
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
                            <td><Content>14,889,000원</Content></td>
                            <td><Content>소멸성</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>교육비</Title3></th>
                            <td><Content>없음</Content></td>
                            <td><Content>교육에 대한 추가 비용 없음</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>장비 및 기자재</Title3></th>
                            <td><Content>12,000만원</Content></td>
                            <td><Content>샌드위치 유니트, 브래드 오븐, 스피드 오븐, 전자레인지, 냉장냉동시설, 주방설비 및 집기, 커피머신, CCTV, 음향장비, 가구 및 인테리어 소품 등</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>인테리어<br />(간판 및 철거비용 제외)</Title3></th>
                            <td><Content>200만원~210만원/평당</Content></td>
                            <td><Content>가설, 전기, 바닥, 벽체, 천정, 설비, 출입문 철거 및 조성, 장비세팅, 기본덕트, 스프링쿨러 등</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>간판</Title3></th>
                            <td><Content>410만원</Content></td>
                            <td><Content>H:450mm / 1면 기준, 어닝 포함</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>전기증설</Title3></th>
                            <td><Content>150만원</Content></td>
                            <td><Content>10KW증설</Content></td>
                        </tr>
                        <tr>
                            <th scope="row"><Title3>냉난방</Title3></th>
                            <td><Content>450만원</Content></td>
                            <td><Content>32평형 시스템1, 벽걸이(냉난방)1, 배관비</Content></td>
                        </tr>
                    </Style.Tbody>
                    <Style.Tfoot>
                        <tr>
                            <th scope="row"><Title3>합계</Title3></th>
                            <td><Content>약 2억 원~2억 1천만원</Content></td>
                            <td><Content>총 비용은 경우에 따라 변동 될 수 있습니다.</Content></td>
                        </tr>
                    </Style.Tfoot>
                </Style.Table>
                </TableBox>
                <Button width="180px" onClick={() => setIsFormClick(true)}>상담 신청하기</Button>
            </PageLayout>
            {
                isFormClick ?
                    <Style.Modal>
                        <Style.ModalContent>
                            <Form onSubmit={onSubmit}>
                                <tr>
                                    <th colSpan={2} style={{ textAlign: "right" }}><Button onClick={() => setIsFormClick(false)} width="70px">닫기</Button></th>
                                </tr>
                                <InputForm label="성함*" name="name" placeholder="성항을 입력해주세요" />
                                <InputForm label="전화번호*" name="phonenumber" placeholder="전화번호를 입력해주세요" />
                                <InputForm label="오픈 희망지역*" name="area" placeholder="오픈지역 입력해주세요" />
                                <InputForm type="radio" label="점포 유*" value="유" name="experience" />
                                <InputForm type="radio" label="점포 무*" value="무" name="experience" />
                                <SelectForm name="openday" label="오픈 희망일*" options={[{ value: "즉시" }, { value: "3개월 이내" }, { value: "3개월 이후" }]} />
                                <SelectForm name="money" label="사업 예산*" options={[{ value: "5천만원 미만" }, { value: "5천만원 미만" }, { value: "5천만원 미만" }]} />
                                <tr>
                                    <th colSpan={2} style={{ textAlign: "center" }}><Button type="submit" width="150px">제출</Button></th></tr>
                            </Form>
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

const TableBox = styled.div`
margin: 30px;
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

export default StartUpPage;