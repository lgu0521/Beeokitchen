import { Title1, Title2, Title3, Content, PageFullWidthLayout } from '../../components/GlobalComponents';
import styled from 'styled-components';
import React from 'react';
import PageMainTitle from '../../components/PageMainTitle';
import { GetStaticProps } from 'next';
import { PageTitleDTO } from '../../dto/page-title.dto';

interface RoundProp {
    value: string
}
interface Props {
    PageTitle: PageTitleDTO
}
const Brand = ({PageTitle}: Props) => {
    const CONTENT_BOX_STYLE = {
        height: "400px",
        backgroundColor: "white"
    }

    const CONTENT_TITLE_STYLE = {
        marginBottom: "20px",
        display: "block",
        color: "white",
        fontWeight: 700
    }

    const FONT_STYLE = {
        color: "white"
    }
    const Round = ({ value }: RoundProp) => {
        return <RoundBorder><Title3 style={FONT_STYLE}>{value}</Title3></RoundBorder>
    }
    return (
        <>
            <PageMainTitle {...PageTitle} />
            <PageFullWidthLayout style={{ ...CONTENT_BOX_STYLE, backgroundImage: "url('http://www.saladykorea.com/images/fran-infobox-bg1.jpg')" }}>
                
            </PageFullWidthLayout>
        </>
    );
};




const ContentWrap = styled.div`
    height: 100%;
    vertical-align: middle;
    display: table-cell;
`;

const ContentUnit = styled.p`
    @media only screen and (max-width: 600px) {
        padding: 0px 50px;
    }
    @media only screen and (min-width: 600px) {
        padding: 0px 100px;
    }
    @media only screen and (min-width: 992px) {
        padding: 0px 200px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 0px 300px;
    }
`

const StepList = styled.ul`
    list-style: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 0px;
`;



const RoundBorder = styled.div`
    display: table-cell;
    vertical-align: middle;
    border-radius: 100%;
    font-weight: 700px;
    text-align: center;
    border : 2px solid #175436;
    position: relative;
    @media only screen and (max-width: 600px) {
        padding: 10px;
        width: 140px;
        height: 140px;
        ::after{
            transform: rotate(90deg);
            top: 150px;
        }
    }
    @media only screen and (min-width: 600px) {
        padding: 10px;
        width: 180px;
        height: 180px;
        ::after{
            left: 190px;
            top: calc(180px / 2);
        }
    }
    @media only screen and (min-width: 768px) {
        padding: 10px;
        width: 200px;
        height: 200px;
        ::after{
            left: 210px;
            top: calc(200px / 2);
        }
    }
    @media only screen and (min-width: 992px) {
        padding: 10px;
        width: 250px;
        height: 250px;
        ::after{
            left: 260px;
            top: calc(250px / 2);
        }
    }

    ::after{
        content: '';
        position: absolute;
        background: url('https://www.subway.co.kr/images/common/icon_arr_r02.png') 0 0 no-repeat;
        width: 6px;
        height: 11px;
    }
`

const StepListItem = styled.li`
    display: table;
    float: left;
    margin-right: 30px;
    @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
    margin-right: 0px !important;
    float: none !important;
    }
    &:last-child > ${RoundBorder}::after{
        content:none;
    }
`;


export const getStaticProps: GetStaticProps = async (context) => {
    const resPageTitle = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/page-title/Brand');
    const PageTitle:PageTitleDTO = await resPageTitle.json();

    if (!PageTitle) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            PageTitle
        }

    }
}
export default Brand;