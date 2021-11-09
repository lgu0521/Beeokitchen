import { GetStaticProps, NextPage } from "next";
import PageNationListView from '../../components/PageNationListView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";
import { NoticeListDTO } from '../../dto/notice-create.dto';
import { FaqListDTO } from '../../dto/faq-create.dto';
import { PageLayout } from '../../components/GlobalComponents';
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

    console.log(faqList);
    return (
        <>
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
                }
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


const TabButton = styled.span<{ isOpen: boolean }>`
    margin: 15px;
    font-size: 25px;
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




