import styled from 'styled-components';
import { Content, Title1, Title4 } from '../components/GlobalComponents';
import { useAuth } from '../hook/AuthProvider';
import PageTitleModeifyModal from './admin/PageTitleModeifyModal';
import {PageTitleDTO} from '../dto/page-title.dto'
const PageMainTitle = (props: PageTitleDTO) => {
    const { user } = useAuth();
    return (
        <>
            <ContentBox>
                {
                    user ? <PageTitleModeifyModal {...props}/> : null
                }
                <Title1 style={{ paddingBottom: "10px", fontWeight: 500 }}>{props.title}</Title1>
                <Line />
                <Content style={{ paddingTop: "20px" }}>{props.content_1}</Content>
                <Content style={{ paddingTop: "5px" }}>{props.content_2}</Content>
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
    width: 100%;
    display: inline-block;
    text-align: center;
    background: rgba(1, 103, 53, 0.3);
    padding: 20px 0;
`;

const Line = styled.span`
&:after{
    content: '';
    width: 30px;
    height: 3px;
    background: #333;
    position: absolute;
    left: 50%;
    margin-left: -15px;}
`
export default PageMainTitle;