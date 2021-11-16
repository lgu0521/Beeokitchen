import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { Title1, Title2, Title3, Content, PageLayout } from '../../components/GlobalComponents';
import PageMainTitle from '../../components/PageMainTitle';
import { MenusWithCatagoryDTO } from '../../dto/menu-create.dto';
import { PageTitleDTO } from '../../dto/page-title.dto';
import MenuEdit from '../../components/admin/MenuEdit';
import { useAuth } from '../../hook/AuthProvider';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
    menusWithCatagory: MenusWithCatagoryDTO[],
    PageTitle: PageTitleDTO
};

const Meau: NextPage<Props> = ({ menusWithCatagory, PageTitle }) => {
    const { user } = useAuth();
    console.log(menusWithCatagory);

    const DragAndDropItem = (item: any) => {
        console.log(item);
    }

    return (
        <>
            <PageMainTitle {...PageTitle} />
            <div>{/*  style={{ background: " rgba(244, 234, 211, 0.3)" }} */}
                {menusWithCatagory.map((catagory, index) => (
                    <PageLayout>
                        <Title1 style={{ fontWeight: 600, color: "#15AA5A" }}>{catagory.catagory}</Title1>
                        <Content style={{ marginTop: "5px" }}>{catagory.content}</Content>
                        {
                            catagory.menus.map((menu, index) => (
                                <ImageItem>
                                    {
                                        user ?
                                            <MenuEdit MenuIndex={index} Menus={catagory.menus} /> : null
                                    }
                                    <StyledImage src={menu.image.downloadUrl} alt="" height={320} width={320} layout="intrinsic" />
                                    <Title3 style={{ fontWeight: 600 }}>{menu.menu || <Skeleton />}</Title3>
                                    <Content style={{ marginTop: "5px", color: "#666" }}>{menu.content || <Skeleton />}</Content>
                                </ImageItem>
                            ))
                        }
                        <Line />
                    </PageLayout>
                ))}
            </div>
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

const Line = styled.div`
    width: 100%;
    border: 1px solid #15AA5A;
`

const StyledImage = styled(Image)`
    border-radius: 100%;
    padding: 15px !important;
`

const ImageItem = styled.div`
    width:50%;
    display: inline-block;
    position: relative;
    margin: 30px 0;
`

export default Meau;