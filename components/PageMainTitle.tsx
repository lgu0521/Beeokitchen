import styled from 'styled-components';
import { useAuth } from '../hook/AuthProvider';
import PageTitleModeifyModal from './admin/PageTitleModeifyModal';
import { PageTitleDTO } from '../dto/page-title.dto'
import 'react-loading-skeleton/dist/skeleton.css'
import { Title1, Title4 } from '../components/GlobalComponents';

const PageMainTitle = (props: PageTitleDTO) => {
    const { user } = useAuth();

    return (
        <>
            <ContentBox>
                {
                    user ? <PageTitleModeifyModal {...props} /> : null
                }
                <Wrap>
                    <Title1>{props.title}</Title1>
                </Wrap>
                <Title4>{props.content_1}</Title4>
                {
                    props.content_2 ?
                        <Title4 style={{ paddingTop: "5px" }}>{props.content_2}</Title4>
                        : null
                }
            </ContentBox>
        </>
    );
};

const Wrap = styled.div`
    @media only screen and (max-width: 600px) {
        padding-bottom: 20px;
    }
    @media only screen and (min-width: 600px) {
        padding-bottom: 20px;
    }
    @media only screen and (min-width: 768px) {
        padding-bottom: 25px;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px auto;
    background: #15AA5A;
    @media only screen and (max-width: 600px) {
        height: 145px;
    }
    @media only screen and (min-width: 600px) {
        height: 220px;
    }
    @media only screen and (min-width: 768px) {
        height: 240px;
    }
    @media only screen and (min-width: 992px) {
        height: 280px;
    }
`;

export default PageMainTitle;