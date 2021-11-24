import { GetStaticProps, NextPage } from "next";
import PageNationListView from '../../components/PageNationListView';
import AccordionListView from '../../components/AccordionListView';
import PageMainTitle from '../../components/PageMainTitle';
import { useState } from "react";
import { NoticeListDTO } from '../../dto/notice-create.dto';
import { FaqDTO } from '../../dto/faq-create.dto';
import { PageMaxNoCSSLayout, Title2 } from '../../components/GlobalComponents';
import styled from "styled-components";
import FaqEdit from '../../components/admin/FaqEdit'
import { useAuth } from "../../hook/AuthProvider";
import { PageTitleDTO } from "../../dto/page-title.dto";

interface Props {
    noticeList: NoticeListDTO[],
    faqList: FaqDTO[],
    PageTitle: PageTitleDTO
}

const BrandPage: NextPage<Props> = ({ noticeList, faqList, PageTitle }) => {
    const [isFaq, setIsFaq] = useState(true);
    const [isNotice, setIsNotice] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageMaxNoCSSLayout style={{ display: "flex" }}>
                <Nav>
                    <Title2>
                        <TabButton isOpen={isFaq} onClick={() => { setIsFaq(true); setIsNotice(false) }}>Q&A</TabButton>
                    </Title2>
                    <Title2>
                        <TabButton isOpen={isNotice} onClick={() => { setIsFaq(false); setIsNotice(true) }}>공지사항</TabButton>
                    </Title2>
                </Nav>
            </PageMaxNoCSSLayout>
            <PageMaxNoCSSLayout>
                {
                    isFaq ? <ContextBox>
                        {
                            faqList.map((item, key) => (
                                <div key={key}>
                                    {
                                        user ? <FaqEdit initialItem={item} initialItems={faqList} /> : null
                                    }
                                    <AccordionListView {...item} />
                                </div>
                            ))}</ContextBox>
                        : null
                }
                {
                    isNotice ? <PageNationListView itemList={noticeList} pageSize={10} /> : null
                }
            </PageMaxNoCSSLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const resNotice = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/notice/');
    const resFaq = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/faq/');
    const noticeList: NoticeListDTO[] = await resNotice.json();
    const faqList: FaqDTO[] = await resFaq.json();
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Board');
    const PageTitle: PageTitleDTO = await resPageTitle.json();


    if (!noticeList && !faqList) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            noticeList,
            faqList,
            PageTitle
        }

    }

}

const Nav = styled.div`
    display: inline-flex;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        margin-top: 40px;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 80px;
    }
    @media only screen and (min-width: 768px) {
        margin-top: 120px;
    }
`

const ContextBox = styled.div`
    width: 100%;
    border-top: 5px solid #03502C;
    @media only screen and (max-width: 600px) {
        margin: 30px 0px;
    }
    @media only screen and (min-width: 600px) {
        margin: 60px 0px;
    }
    @media only screen and (min-width: 768px) {
        margin: 80px 0px;
    }
`

const TabButton = styled.span<{ isOpen: boolean }>`
    margin: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #03502C;
    opacity: ${props => props.isOpen ? ' 100%' : '50%'};
    &:hover{
        color: #03502C;
        opacity: 100%;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
`
export default BrandPage;




