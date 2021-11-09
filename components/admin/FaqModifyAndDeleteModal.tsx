import { FaqCreateDTO, FaqModifyDTO, FaqDeleteDTO } from '../../dto/faq-create.dto';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
// component
import { Form, InputForm, ButtonForm, SelectForm } from '../Form';
import BasicModal from '../BasicModal';
//이미지
import EditIcon from '../../public/Edit.png'
import DeleteIcon from '../../public/Delete.png'
import styled from 'styled-components';

const FaqModifyAndDeleteModal = (FaqValue: FaqModifyDTO) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = async (data: FaqCreateDTO) => {
        const sendData: FaqModifyDTO = {
            id: FaqValue.id,
            title: data.title,
            content: data.content,
            order: data.order
        };
        console.log(sendData);
        try{
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/modify", {
                method: 'POST',
                body: JSON.stringify(sendData)
            });
            setIsModalOpen(false);
            router.push("/board");

        }catch(e){
            alert('다시 시도해주세요');
        }
    }

    const DeleteItem = async () => {
        const deleteData: FaqDeleteDTO = {
            id: FaqValue.id
        };
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/delete", {
                method: 'POST',
                body: JSON.stringify(deleteData)
            });
            alert('삭제되었습니다');
            router.push('/board');
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <Wrap>
                <Icon>
                    <Image src={EditIcon} width="20px" height="20px" onClick={() => setIsModalOpen(true)} />
                </Icon>
            </Wrap>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                    <Form onSubmit={onSubmit}>
                        <InputForm label="매장 이름" defaultValue={FaqValue.title} name="title" />
                        <InputForm label="매장 운영시간" defaultValue={FaqValue.content} name="content" />
                        <InputForm label="매장 전화번호" defaultValue={FaqValue.order} name="order"  />
                        <ButtonForm name="제출" />
                    </Form>
                    <Icon>
                        <Image src={DeleteIcon} width="25px" height="25px" onClick={DeleteItem} />
                    </Icon>
            </BasicModal>
        </>
    );
};


const Icon = styled.button`
    display: table-cell;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    border-radius: 100%;
    margin-left: 5px;
    border: 1px solid #175436;
`

const Wrap = styled.div`
    display: table;
    position: absolute;
    float: right;
    right: 0;
    padding: 30px;
    z-index: 1;
`
export default FaqModifyAndDeleteModal;