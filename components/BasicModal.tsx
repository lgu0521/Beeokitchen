import React, { Children, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Title1 } from './GlobalComponents';
import Image from 'next/image';
import XIcon from '../public/Close.png';
interface ModalProps {
    onClose: () => void,
    isModalOpen: Boolean,
    children: React.ReactNode
}
const BasicModal = ({ onClose, isModalOpen, children }: ModalProps) => {

    return (
        <>
            { isModalOpen ?
                <Modal>
                    <ModalContent>
                        <ModalWrap>
                        <Header>
                            <Title style={{width:"50%",textAlign: "left"}}>✍️ Edit</Title>
                            <CloseIcon onClick={onClose}>
                                <Image src={XIcon} width={35} height={35}/>
                            </CloseIcon>
                        </Header>
                        <Body>
                        {children}
                        </Body>
                        </ModalWrap>
                    </ModalContent>
                </Modal> : null
            }
        </>
    );
};

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const Title = styled.div`
font-size: 28px;
`;

export const Header = styled.div`   
    display: flex;
    border-bottom: 2px solid black;
    align-content: space-between;
    width: 100%;
    padding-bottom: 10px;
`;

const Body = styled.div`
    margin: 20px 0px;
`;

const ModalWrap = styled.div`
    padding: 40px;
`

const CloseIcon = styled.div`
    width: 50%;
    text-align: right;
    cursor: pointer;
`
export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    border: 1px solid #888;
    height:70%;
    border-radius: 20px;
    border: 0px;
    display: table;
    max-width: 600px;
`;


export default BasicModal;