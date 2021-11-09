import { StoreCreateDTO, StoreModifyDTO, StoreDeleteDTO } from '../../dto/store-create.dto';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
// component
import { GetMultiDownloadUrl } from '../GetDownloadUrl';
import { Form, InputForm, ButtonForm, SelectForm } from '../Form';
import BasicModal from '../BasicModal';
//이미지
import EditIcon from '../../public/Edit.png'
import DeleteIcon from '../../public/Delete.png'
import styled from 'styled-components';

const StoreModifyAndDeleteModal = (StoreValue: StoreModifyDTO) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = async (data: StoreCreateDTO) => {
        const sendData: StoreModifyDTO = {
            id: StoreValue.id,
            name: data.name,
            operation: data.operation,
            location: data.location,
            phonenumber: data.phonenumber,
            url: StoreValue.url
        };

        if (data.tmpUrl.length > 0) {
            const url = await GetMultiDownloadUrl(data.tmpUrl);
            sendData.url = url;
        }
        console.log(sendData);
        try{
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/modify", {
                method: 'POST',
                body: JSON.stringify(sendData)
            });
            setIsModalOpen(false);
            router.push("/store");

        }catch(e){
            alert('다시 시도해주세요');
        }
    }

    const DeleteMenu = async () => {
        const deleteData: StoreDeleteDTO = {
            id: StoreValue.id
        };
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/delete", {
                method: 'POST',
                body: JSON.stringify(deleteData)
            });
            alert('삭제되었습니다');
            router.push('/store');
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
                        <InputForm label="매장 이름" defaultValue={StoreValue.name} name="name" />
                        <InputForm label="매장 운영시간" defaultValue={StoreValue.operation} name="operation" />
                        <InputForm label="매장 전화번호" defaultValue={StoreValue.phonenumber} name="phonenumber"  />
                        <InputForm label="매장 위치" defaultValue={StoreValue.location} name="location" />
                        <InputForm label="매장 이미지 추가" type="file" name="tmpUrl" multiple/>
                        <ButtonForm name="제출" />
                    </Form>
                    <Icon>
                        <Image src={DeleteIcon} width="25px" height="25px" onClick={DeleteMenu} />
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
export default StoreModifyAndDeleteModal;