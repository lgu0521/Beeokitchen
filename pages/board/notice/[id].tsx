import React from 'react';
import { GetServerSideProps } from 'next';
import { Params } from 'next/dist/server/router';
import { NoticeDetailDTO } from '../../../dto/notice-create.dto'
import dynamic from 'next/dynamic';
import {  ViewerProps } from '@toast-ui/react-editor';
import PageMainTitle from '../../../components/PageMainTitle';
import { PageMaxNoCSSLayout, Title4, Title3 } from '../../../components/GlobalComponents';
import styled from 'styled-components';
import Link from 'next/link';
import { useAuth } from '../../../hook/AuthProvider';
import { PageTitleDTO } from '../../../dto/page-title.dto';
import { Router, useRouter } from 'next/dist/client/router';

interface Props {
    notice: NoticeDetailDTO,
    PageTitle: PageTitleDTO
}
const TuiNoSSRWrapper = dynamic<ViewerProps>(() => import('../../../components/ViewEditor'), {
    ssr: false,
    loading: () => <p>Loading . . .</p>
})
const TuiWrapper = React.forwardRef((props: ViewerProps, ref) => (
    <TuiNoSSRWrapper {...props} />
));
TuiWrapper.displayName = 'Editor';

const NoticeDetailPage = ({ notice, PageTitle }: Props) => {
    const { user } = useAuth();
    const router = useRouter();
    return (
        <div>
                <PageMainTitle {...PageTitle} />
                <PageMaxNoCSSLayout style={{textAlign:"center"}}>
                    {
                        user ? <Link href={"/admin/notice/"+ notice.id}><a>수정하기</a></Link> : null
                    }
                    <Table>
                        <Thead>
                            <tr>
                                <th><Title3>{notice.title}</Title3></th>
                                <th><Title3>{notice.datetime}</Title3></th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr>
                                <th rowSpan={2}>
                                    <Title4>
                                    {
                                        <TuiWrapper initialValue={notice.content} />
                                    }
                                    </Title4>
                                    
                                </th>
                            </tr>
                        </Tbody>
                    </Table>
                    <Button onClick={()=> router.push("/board")}>목록으로</Button>
                </PageMaxNoCSSLayout>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/notice/${id}`);
    const notice: NoticeDetailDTO = await res.json();
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Notice");
    const PageTitle: PageTitleDTO = await resPageTitle.json();

    if (!notice) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            notice,
            PageTitle
        }
    }
}


const Table = styled.table`
    border-top: 2px solid #175436;
    border-bottom: 1px solid #175436;
    text-align: left;
    margin: 120px 0px     0px 0px;
    @media only screen and (min-width: 768px) {
        width: 100%;
    }
`
const Thead = styled.thead`
    font-weight: 700;
    tr{
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        border-bottom: 2px solid #175436;
    }
    th{
        vertical-align: middle;
        padding: 20px 20px;
    }
`
const Tbody = styled.tbody`
    display: inline-block;
    padding: 20px;
    min-height: 300px;
    line-height: 200%;
    table{
        border: 1px solid black;
        border-spacing: 0;
    }
    table > thead > tr, table > tbody > tr{
        border: 1px solid black;
    }
    table > thead > tr > th, table > tbody > tr > th{
        border: 1px solid black;
    }
    table > thead > tr > td, table > tbody > tr > td{
        border: 1px solid black;
    }
`

const Button = styled.button`
    color: #404346;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
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
export default NoticeDetailPage;