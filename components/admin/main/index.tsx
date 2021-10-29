import { useState } from 'react';
import styled from 'styled-components';
import { Form, InputForm } from '../../Form'
import { Button } from '../../GlobalComponents';

const AdminMainBannerComponent = () => {
    const [isModal, setIsModal] = useState(Boolean);
    const onSubmit = () => {

    }
    return (
        <>
            <button onClick={() => setIsModal(!isModal)}>수정</button>
            {
                isModal ?
                    <Modal>
                        <ModalContent>
                            <Form onSubmit={onSubmit}>
                                <tr>
                                    <th colSpan={2} style={{ textAlign: "right" }}><Button onClick={() => setIsModal(!isModal)} width="70px">닫기</Button></th>
                                </tr>
                                <InputForm label="성함*" name="name" placeholder="성항을 입력해주세요" />
                                <InputForm label="전화번호*" name="phonenumber" placeholder="전화번호를 입력해주세요" />
                                <InputForm label="오픈 희망지역*" name="area" placeholder="오픈지역 입력해주세요" />
                                <tr>
                                    <th colSpan={2} style={{ textAlign: "center" }}><Button type="submit" width="150px">제출</Button></th></tr>
                            </Form>
                        </ModalContent>
                    </Modal>
                    : null
            }
        </>
    );
};


const Modal = styled.div`
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

const ModalContent = styled.div`
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

export default AdminMainBannerComponent;