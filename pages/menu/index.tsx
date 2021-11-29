//Basic
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useAuth } from '../../hook/AuthProvider';
//Style
import styled from 'styled-components';
import { Title5, Title3, PageMaxNoCSSLayout, PageFullWidthLayout, Title2, Title4 } from '../../components/GlobalComponents';
//Component
import PageMainTitle from '../../components/PageMainTitle';
import { MenuEdit, MenuDefaulEdit } from '../../components/admin/MenuEdit';
//DTO
import { MenusWithCatagoryDTO } from '../../dto/menu-create.dto';
import { PageTitleDTO } from '../../dto/page-title.dto';
import MenuCatagoryEdit from '../../components/admin/MenuCatagoryEdit';

interface Props {
    menusWithCatagory: MenusWithCatagoryDTO[],
    PageTitle: PageTitleDTO
};

const Meau: NextPage<Props> = ({ menusWithCatagory, PageTitle }) => {
    const { user } = useAuth();

    const DragAndDropItem = (item: any) => {
        console.log(item);
    }

    return (
        <>
            <PageMainTitle {...PageTitle} />
            <Ul>
                {menusWithCatagory.map((catagory, i) => (
                    <Li key={i}>
                        <PageFullWidthLayout>
                            <PageMaxNoCSSLayout>
                                <>
                                    <Header key={i}>
                                        {
                                            user ?
                                                <MenuCatagoryEdit MenuCatagory={catagory} MenuCatagorys={menusWithCatagory} /> : null
                                        }
                                        <li>
                                            <Title2 style={{ fontWeight: 600, color: "#15AA5A" }}>{catagory.title}</Title2>
                                        </li>
                                        <li>
                                            <Title4 style={{ fontWeight: 300 }}>{catagory.content}</Title4>
                                        </li>
                                    </Header>
                                    <Main>
                                        {
                                            catagory.menus.map((menu, i) => (
                                                <>
                                                    <li>
                                                        {
                                                            user ?
                                                                <MenuEdit MenuIndex={i} Menus={catagory.menus} /> : null
                                                        }

                                                        <ImageWrap src={menu.image.downloadUrl} alt="" height={380} width={380} layout="intrinsic" />
                                                        <ResTitle3>{menu.title}</ResTitle3>
                                                        <Title5 style={{ fontWeight: 600, marginTop: "15px", color: "#50555C", lineHeight: "120%" }}>
                                                            {menu.content1}<br />
                                                            <MenuContent2>{menu.content2}</MenuContent2>
                                                        </Title5>
                                                    </li>
                                                </>
                                            ))
                                        }
                                    </Main>
                                </>
                            </PageMaxNoCSSLayout>
                        </PageFullWidthLayout>
                    </Li>
                ))}
            </Ul>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const menusWithCatagory: MenusWithCatagoryDTO[] = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu").then(res => res.json()).then(data => { return data });
    const PageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Menu").then(res => res.json()).then(data => { return data });

    if (!menusWithCatagory && !PageTitle) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            menusWithCatagory,
            PageTitle
        }
    }
}
const Li = styled.li`
    @media only screen and (max-width: 600px) {
        padding: 50px 0px;
    }
    @media only screen and (min-width: 600px) {
        padding: 50px 0px;
    }
    @media only screen and (min-width: 768px) {
        padding: 80px 0px;
    }
    @media only screen and (min-width: 992px) {
        padding: 100px 0px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 100px 0px;
    }
`

const Ul = styled.ul`
    ${Li}:nth-child(2n-1){
        background-color: rgba(227, 181, 159, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const MenuContent2 = styled.div`
    color: #50555C;
    font-weight: 300;
    margin-top: 3px;
    @media only screen and (max-width: 600px) {
        display:none;
    }
`

const ResTitle3 = styled(Title3)`
    font-weight: 600;
    margin-top: 0px;
    @media only screen and (min-width: 992px) {
        margin-top: 30px !important;
    }      
`

const ImageWrap = styled(Image)`
    border-radius: 100%;
    @media only screen and (max-width: 600px) {
        padding: 15px !important;
    }
    @media only screen and (min-width: 600px) {
        padding: 30px !important;
    }
    @media only screen and (min-width: 768px) {
        padding: 30px !important;
    }
    @media only screen and (min-width: 992px) {
        padding: 0px !important;
    }
`

const Header = styled.ul`
    border-bottom: 1.5px solid #15AA5A;
    li:nth-child(2){
        font-weight: 400;
    }
    @media only screen and (max-width: 600px) {
        padding: 0px 0px 20px 0px;
    }
    @media only screen and (min-width: 600px) {
        padding: 0px 0px 30px 0px;
    }
    @media only screen and (min-width: 768px) {
        padding: 0px 0px 40px 0px;
    }
`

const Main = styled.ul`
    position: relative;
    text-align: center;
    
    li{ 
        display: inline-block;
        width: 50%;
        @media only screen and (max-width: 600px) {
            margin: 30px 0px;
        }
        @media only screen and (min-width: 600px) {
            margin: 50px 0px;
        }
        @media only screen and (min-width: 768px) {
            margin: 60px 0px;
        }
        @media only screen and (min-width: 992px) {
            margin: 70px 0px;
        }
        @media only screen and (min-width: 1200px) {
            margin: 80px 0px;
        }
    }
    ::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 1.5px;
        top: 100%;
        left: 0;
        background: #15AA5A;
    }

    :last-child ::after{
        height: 0px;
    }
`
export default Meau;