import styled from 'styled-components';
import Link from 'next/link';
import PageNationButton from './PageNationButton';
import GetPageNationViewList from './GetPageNationDataList'
import { useState } from 'react';
import { Title2, Title3 } from './GlobalComponents';
import { NoticeListDTO } from '../dto/notice-create.dto';

interface Props {
    itemList: NoticeListDTO[],
    pageSize: number
}


const PageNationView = ({ itemList, pageSize }: Props) => {
    const itemCount = itemList.length;
    const [currentCount, setCurrentCount] = useState(1);

    const viewItemList = GetPageNationViewList({ itemList, pageSize, currentCount });

    const handlePageChange = (page: number) => {
        setCurrentCount(page);
    }

    return (
        <>
            <Title2>총: {itemCount}</Title2>
            <Table>
                <colgroup>
                    <col width="50px" />
                    <col width="900px" />
                    <col width="200px" />
                </colgroup>
                <Tbody>
                    {
                        viewItemList.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td><Title3>{key + 1}</Title3></td>
                                    <th><Link href={`/board/notice/${item.id}`}><a><Title3>{item.title}</Title3></a></Link></th>
                                    <td><Title3>{item.datetime}</Title3></td>
                                </tr>)
                        })
                    }
                </Tbody>
            </Table>
            <PageNationButton itemCount={itemCount} pageSize={pageSize} currentCount={currentCount} onPageChange={handlePageChange} />
        </>
    );
};

const Tbody = styled.tbody`
    & td, th{
        height: 60px;
        border-bottom: 1px solid #dddddd;
        text-align: center;
        color: #292929;
        letter-spacing: -0.04em;
        padding: 10px;
        font-weight: normal;
    }
    td{
        text-align: center;
    }
    th{
        text-align: left;
    }
`

const Table = styled.table`
    border-top: 2px solid #175436;
    display: inline-block;
    border-spacing: 0;
    width: 80%;
`
export default PageNationView;