import React, { useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Params } from 'next/dist/server/router';
import { NoticeDetailDTO } from '../../../dto/notice-create.dto'
import dynamic from 'next/dynamic';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import PageMainTitle from '../../../components/PageMainTitle';
import { Button, PageLayout } from '../../../components/GlobalComponents';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { useAuth } from '../../../hook/AuthProvider';
import { PageTitleDTO } from '../../../dto/page-title.dto';

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
    return (
        <div>
                <PageMainTitle {...PageTitle} />
                <PageLayout>
                    {
                        user ? <Link href="/admin/notice/123"><a>수정하기</a></Link> : null
                    }
                    <Table>
                        <Thead>
                            <tr>
                                <th style={{width:"80%"}}>{notice.title}</th>
                                <th style={{width:"20%"}}>{notice.datetime}</th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr>
                                <th rowSpan={2}>
                                    {
                                        <TuiWrapper initialValue={notice.content} />
                                    }
                                </th>
                            </tr>
                        </Tbody>
                    </Table>
                </PageLayout>
                <Button >목록으로</Button>
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
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
        width: 100%;
    }
`
const Thead = styled.thead`
    tr{
        border-bottom: 2px solid #175436;
        display: table-cell;
    }
    th{
        height: 50px;
        vertical-align: middle;
        padding: 0px 20px;
    }
`
const Tbody = styled.tbody`
    display: inline-block;
    padding: 20px;
    min-height: 300px;
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
export default NoticeDetailPage;