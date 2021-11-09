import styled from 'styled-components';
import { Content, Title1, Title4 } from '../components/GlobalComponents';

interface Props {
    title: string,
    description1?: string,
    description2?: string
}

const PageMainTitle = ({ title, description1, description2 }: Props) => {

    return (
        <>
            <ContentBox>
                <Title1 style={{ paddingBottom: "10px", fontWeight: 500 }}>{title}</Title1>
                <Line />
                <Content style={{ paddingTop: "20px"}}>{description1}</Content>
                <Content style={{ paddingTop: "5px"}}>{description2}</Content>
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