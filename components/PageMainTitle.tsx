import styled from 'styled-components';
import { Title1, Content } from '../components/GlobalComponents';

interface Props {
    title: string,
    description?: string
}

const PageMainTitle = ({ title, description }: Props) => {

    return (
        <>
            <ContentBox>
                <ContentWrap>
                    <Title1>{title}</Title1>
                    {
                        description ?
                            <>
                                <Wrap>
                                    <Content>{description}</Content>
                                </Wrap>
                                <Line/>
                                </> : <Line bottom="30px"/>
                    }
                    
                </ContentWrap>
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
    width: 100%;
    height: 150px;
    text-align: center;
    display: table;
`;

const ContentWrap = styled.div`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    
`;

const Wrap = styled.div`
    color: #666;
    margin-top: 10px;
    margin-bottom: 30px;

`

const Line = styled.span<{"bottom"?:string}>`
&:after{
    content: '';
    width: 30px;
    height: 3px;
    background: #333;
    position: absolute;
    bottom: ${(props) => props.bottom ? props.bottom : '10px'};
    left: 50%;
    margin-left: -15px;}
`
export default PageMainTitle;