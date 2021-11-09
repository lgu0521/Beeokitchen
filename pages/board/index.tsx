import { GetStaticProps, NextPage } from "next";
import PageNationListView from '../../components/PageNationListView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";
import { NoticeListDTO } from '../../dto/notice-create.dto';
import { FaqListDTO } from '../../dto/faq-create.dto';
import { PageLayout, Title2 } from '../../components/GlobalComponents';
import styled from "styled-components";
import FaqModifyAndDeleteModal from '../../components/admin/FaqModifyAndDeleteModal'
import { useAuth } from "../../hook/AuthProvider";
interface Props {
    noticeList: NoticeListDTO[],
    faqList: FaqListDTO[]
}

const BrandPage: NextPage<Props> = ({ noticeList, faqList }) => {
    const [isFaq, setIsFaq] = useState(true);
    const [isNotice, setIsNotice] = useState(false);
    const { user } = useAuth();

    return (
        <>
        <PageMainTitle title="게시판" description1="항상 고객님의 의견에 귀 기울이는" description2="비오키친이 되도록 노력하겠습니다" />
            <PageLayout style={{ display: "flex" }}>
                <Nav>
                    <Title2>
                        <TabButton isOpen={isFaq} onClick={() => { setIsFaq(true); setIsNotice(false) }}>FAQ</TabButton>
                    </Title2>
                    <Title2>
                        <TabButton isOpen={isNotice} onClick={() => { setIsFaq(false); setIsNotice(true) }}>공지사항</TabButton>
                    </Title2>
                </Nav>
            </PageLayout>
            <PageLayout>
                <ContextBox>
                    {
                        isFaq ? <>
                            {
                                faqList.map((item, key) => (
                                    <div key={key}>
                                        {
                                            user ? <FaqModifyAndDeleteModal {...item} /> : null
                                        }
                                        <AccordionListView {...item} />
                                    </div>
                                ))}
                        </> : null
                    }
                    {
                        isNotice ? <PageNationListView itemList={noticeList} pageSize={5} /> : null
                    }</ContextBox>
            </PageLayout>
        </>
    );
};


export const getStaticProps: GetStaticProps = async (context) => {
    const resNotice = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/notice/');
    const resFaq = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/faq/');
    const noticeList: NoticeListDTO[] = await resNotice.json();
    const faqList: FaqListDTO[] = await resFaq.json();

    if (!noticeList && !faqList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            noticeList,
            faqList
        }

    }

}

const Nav = styled.div`
display: inline-flex;
    margin: 0 auto;
`
const ContextBox = styled.div`
width: 100%;
border-top: 3px solid #175436;
`

const TabButton = styled.span<{ isOpen: boolean }>`
    margin: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #175436;
    opacity: ${props => props.isOpen ? ' 100%' : '50%'};
    &:hover{
        color: #175436;
        opacity: 100%;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
`
export default BrandPage;




