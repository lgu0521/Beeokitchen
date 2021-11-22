import styled from 'styled-components';

const Title1 = styled.h1`
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title2};;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title2};
    }
    @media only screen and (min-width: 768px) {
        font-size: 4rem;
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.title1};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.title1};
    }
`;

const Title2 = styled.h2`
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
    @media only screen and (min-width: 600px) {
        font-size: 2.5rem;
    }
    @media only screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.title2};
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.title2};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.title2};
    }
`;

const Title3 = styled.h3`
    letter-spacing: 1px;
    @media only screen and (max-width: 310px) {
        letter-spacing: 0px !important;
        font-size: ${props => props.theme.fontSizes.title5};
    }
    @media only screen and (min-width: 310px) {
        font-size: ${props => props.theme.fontSizes.title4};
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title3};
    }
    @media only screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.title3};
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.title3};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.title3};
    }
`;


const Title4 = styled.h4`
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
        font-size: 1.2rem
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title5};
    }
    @media only screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.title4};
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.title4};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.title4};
    }
`;

const Title5 = styled.h5`
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title5};;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => props.theme.fontSizes.title5};
    }
    @media only screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.title5};
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.title5};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.title5};
    }
`;

const Content = styled.p`
    @media only screen and (max-width: 600px) {
        font-size: ${props => props.theme.fontSizes.xm};;
    }
    @media only screen and (min-width: 600px) {
        font-size: ${props => props.theme.fontSizes.sm};
    }
    @media only screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.md};
    }
    @media only screen and (min-width: 992px) {
        font-size: ${props => props.theme.fontSizes.md};
    }
    @media only screen and (min-width: 1200px) {
        font-size: ${props => props.theme.fontSizes.lg};
    }
`;

export { Title1, Title2, Title3, Title4, Title5, Content, Button, PageLayout, PageFullWidthLayout };

interface PropsType {
    width?: string;
}


const Button = styled.button < PropsType > `
    padding: 15px 10px;
    text-align: center;
    margin-top: 30px;
    border-radius: 30px;
    border: 0px;
    height: 60px;
    ${({ width }) => {
        return width ? `width: ${width};` : 'width: 70%;';
    }
    }
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: #175436;
    &:hover {
        background-color: #ffce32;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
    cursor: pointer;
`;

const PageLayout = styled.div`
    position: relative;
    width:100%;
    padding: 30px 10px;
    overflow: auto;
    text-align: center;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
        width: auto;
    }
    @media only screen and (min-width: 1000px) {
        width: 1000px;
    }
    @media only screen and (min-width: 1600px) {
        width: 1200px;
    }
`

const PageFullWidthLayout = styled.div`
    width:100%;
    margin: 0 auto;
    overflow: auto;
    text-align: center;
`