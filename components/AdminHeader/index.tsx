import { PageFullWidthLayout } from '../../components/GlobalComponents'
import Link from 'next/link';
import styled from 'styled-components';

const AadminHeader = () => {
    return (
        <>
            <PageFullWidthLayout>
                <ul>
                    <li><Link href=""><a>기본설정</a></Link></li>
                    <li><Link href=""><a>메뉴</a></Link></li>
                    <li><Link href=""><a>매장</a></Link></li>
                    <li><Link href=""><a>게시판</a></Link></li>
                    <Line/>
                    <li><Link href=""><a>창업문의</a></Link></li>
                </ul>
            </PageFullWidthLayout>
        </>
    );
};

const Line = styled.div`

`
export default AadminHeader;