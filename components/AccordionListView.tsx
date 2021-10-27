import styled from 'styled-components';
import { useState } from 'react';
import { Title3, Content } from './GlobalComponents';
import { FaqDTO } from '../dto/faq-create.dto';

const AccordionListView = ({ title, content }: FaqDTO, ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AccordionListBox>
                <AccordionItemBox>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        <QuestionIcon />
                        <Title3>{title}</Title3>
                        <DropIcon isOpen={isOpen} />
                    </Button>
                </AccordionItemBox>
                <AccordionTextBox isOpen={isOpen}>
                    <AccordionTextWrap>
                    <Content>{content}</Content>
                    </AccordionTextWrap>
                </AccordionTextBox>
            </AccordionListBox>
        </>
    );
};

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 12px 40px 12px 0;
    text-align: left;
    position: relative;
    border-radius: 0; //button basic style remove
    border: 0;        //button basic style remove
    background: none; //button basic style remove
    appearance: none; //button basic style remove
`

const DropIcon = styled.span<{ isOpen: boolean }>`
    position: absolute;
    height: 100%;
    object-fit: contain;
    background: url("https://eggdrop.co.kr/assets/images/common/icon_select.svg") no-repeat center center;
    background-size: contain;
    transform: rotate(${props => props.isOpen ? '-180deg' : '0deg'});
    transition: transform .3s ease;

    @media only screen and (max-width: 600px) {
        right: 5px;
        width: 10px;
    }
    @media only screen and (min-width: 600px) {
        right: 5px;
        width: 10px;
    }
    @media only screen and (min-width: 768px) {
        right: 20px;
        width: 15px;
    }
`
const QuestionIcon = styled.span`
    position: relative;

    background: url("http://www.saladykorea.com/superboard/images/sb_ico_faq_q.png") no-repeat 20px center;

    @media only screen and (max-width: 600px) {
        background-size: 20px auto;
        padding: 10px 20px;
        background-position: 5px;
    }
    @media only screen and (min-width: 600px) {
        background-size: 20px auto;
        padding: 10px 20px;
        background-position: 5px;
    }
    @media only screen and (min-width: 768px) {
        padding: 10px 25px;
        background-size: 30px auto;
    }
`
const AccordionListBox = styled.article`
    display: inline-block;
    border-bottom: 1px solid #175436;
    width: 80%;
`
const AccordionItemBox = styled.head`
    width: 100%;
    display: inline-block;
    padding: 5px 0px;
`
const AccordionTextBox = styled.div<{ isOpen: boolean }>`
    text-align: left;
    padding: 0 8px;
    overflow: hidden;
    height: ${props => props.isOpen ? '100px' : '0px'};
    transition: height 0.35s ease;
`

const AccordionTextWrap = styled.div`
    @media only screen and (max-width: 600px) {
        padding: 5px 30px;
    }
    @media only screen and (min-width: 600px) {
        padding: 5px 30px;
    }
    @media only screen and (min-width: 768px) {
        padding: 10px 50px;
    }
    @media only screen and (min-width: 992px) {
        padding: 10px 50px;
    }
    @media only screen and (min-width: 1200px) {
        padding: 10px 50px;
    }
`

export default AccordionListView;