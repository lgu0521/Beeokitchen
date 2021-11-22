import styled from 'styled-components';
import { useAuth } from '../hook/AuthProvider';
import PageTitleModeifyModal from './admin/PageTitleModeifyModal';
import { PageTitleDTO } from '../dto/page-title.dto'
import 'react-loading-skeleton/dist/skeleton.css'
import { Title1, Title3 } from '../components/GlobalComponents';

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
                <Title3>{props.content_1}</Title3>
                {
                    props.content_2 ?
                        <Title3 style={{ paddingTop: "7px" }}>{props.content_2}</Title3>
                        : null
                }
            </ContentBox>
        </>
    );
};

const Wrap = styled.div`
    @media only screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
    @media only screen and (min-width: 600px) {
        padding-bottom: 10px;
    }
    @media only screen and (min-width: 768px) {
        padding-bottom: 20px;
    }
    @media only screen and (min-width: 992px) {
        padding-bottom: 22px;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    height: 28vh;
    background: #15AA5A;
    @media only screen and (max-width: 600px) {
        padding: 20px 0;
    }
    @media only screen and (min-width: 600px) {
        padding: 30px 0;
    }
    @media only screen and (min-width: 768px) {
        padding: 50px 0;
    }
    @media only screen and (min-width: 992px) {
        padding: 70px 0;
    }
`;

export default PageMainTitle;