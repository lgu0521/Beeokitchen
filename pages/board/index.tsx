import { GetServerSideProps, NextPage } from "next";
import PageNationListView from '../../components/PageNationListView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";
import { NoticeListDTO } from '../../dto/notice-create.dto';
import { FaqListDTO } from '../../dto/faq-create.dto';
import { PageLayout } from '../../components/GlobalComponents';
import styled from "styled-components";
interface Props {
    noticeList: NoticeListDTO[],
    faqList: FaqListDTO[]
}

const BrandPage: NextPage<Props> = ({ noticeList, faqList }) => {
    const [isFaq, setIsFaq] = useState(true);
    const [isNotice, setIsNotice] = useState(false);
    return (
        <>
            <PageMainTitle title="게시판" description="비오키친과 함께 하실 점주님을 모집합니다. 세계적인 브랜드의 성공 철학을 공유합니다." />
            <PageLayout>
                <TabButton isOpen={isFaq} onClick={() => { setIsFaq(true); setIsNotice(false) }}>FAQ</TabButton>
                <TabButton isOpen={isNotice} onClick={() => { setIsFaq(false); setIsNotice(true) }}>공지사항</TabButton>
            </PageLayout>
            <PageLayout>
                {
                    isFaq ? <>
                        {
                            faqList.map((item, key) => (
                                <div key={key}>
                                <AccordionListView {...item} />
                                </div>
                            ))}
                    </> : null
                }
                {
                    isNotice ? <PageNationListView itemList={noticeList} pageSize={5} /> : null
                }
            </PageLayout>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
    const resNotice = await fetch(process.env.API_URL + '/api/notice/');
    const resFaq = await fetch(process.env.API_URL + '/api/faq/');
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


const TabButton = styled.span<{isOpen: boolean}>`
    margin: 15px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    color: #175436;
    opacity: ${props => props.isOpen ? ' 100%': '50%'};
    &:hover{
        color: #175436;
        opacity: 100%;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
`
export default BrandPage;




