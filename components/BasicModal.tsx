import React, { Children, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

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
                        <button onClick={() => onClose()}>닫기</button>
                        {children}
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

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    border: 1px solid #888;
    height:70%;
    border-radius: 20px;
    border: 0px;
    display: table;

    @media only screen and (max-width: 600px) {
        padding: 10px;
        width: 90%;
    }
    @media only screen and (min-width: 600px) {
        padding: 10px;
        width:80%;
    }
    @media only screen and (min-width: 768px) {
        padding: 20px;
        width: 70%;
    }
    @media only screen and (min-width: 992px) {
        padding: 20px;
        width: 60%;
    }
    @media only screen and (min-width: 1200px) {
        padding: 20px;
        width: 50%;
    }
`;


export default BasicModal;