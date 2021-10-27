import React, { useRef } from 'react';
import { GetServerSideProps } from 'next';
import { Params } from 'next/dist/server/router';
import { NoticeDTO } from '../../../dto/notice-create.dto'
import dynamic from 'next/dynamic';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import PageMainTitle from '../../../components/PageMainTitle';
import { PageLayout } from '../../../components/GlobalComponents';
import styled from 'styled-components';

interface Props {
    notice: NoticeDTO
}
const TuiNoSSRWrapper = dynamic<ViewerProps>(() => import('../../../components/ViewEditor'), {
    ssr: false,
    loading: () => <p>Loading . . .</p>
})
const TuiWrapper = React.forwardRef((props: ViewerProps, ref) => (
    <TuiNoSSRWrapper {...props} />
));
TuiWrapper.displayName= 'Editor';

const NoticeDetailPage = ({ notice }: Props) => {
    return (
        <div>
            <PageMainTitle title="공지사항 및 보도자료" />
            <PageLayout>
                <Table>
                    <colgroup>
                        <col width="" />
                        <col width="" />
                        <col width="" />
                    </colgroup>
                    <Thead>
                        <tr>
                            <th>{notice.title}</th>
                            <th>{notice.datetime}</th>
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

        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(process.env.API_URL+`/api/notice/${id}`);
    const notice: NoticeDTO = await res.json();

    if (!notice) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            notice
        }
    }
}


const Table = styled.table`
    border-top: 2px solid #175436;
    border-bottom: 2px solid #175436;
    text-align: left;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
    @media only screen and (min-width: 600px) {
        width: 80%;
    }
    @media only screen and (min-width: 768px) {
        width: 80%;
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