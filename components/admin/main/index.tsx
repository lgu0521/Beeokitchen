import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, InputForm } from '../../Form'
import { Button, Title1 } from '../../GlobalComponents';
import BasicModal from '../../BasicModal';
import Image from 'next/image';
//이미지
import EditIcon from '../../../public/Edit.png'
import { useForm } from 'react-hook-form';
import { BannerDTO } from '../../../dto/banner-create.dto'
import { ImageBlocks } from '../../../dto/image-create.dto';

import DragAndDrop from '../../DragAndDrop'

interface Props {
    BannerList: BannerDTO[]
}

const AdminMainBannerComponent = ({ BannerList }: Props) => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [todo, setTodos] = useState(BannerList);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onSubmit = async (data: ImageBlocks) => {
        console.log(todo);
        try {
            todo.map(async (item, index) => {
                if (item.id) {
                    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner/modify", {
                        method: 'POST',
                        body: JSON.stringify(item)
                    });
                } else {
                    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner/create", {
                        method: 'POST',
                        body: JSON.stringify(item)
                    });
                }
            })
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DeleteImage = async (item: any) => {
        try {
            if (item.id) {
                await fetch(process.env.NEXT_PUBLIC_API_URL +'/api/banner/delete', {
                    method: 'POST',
                    body: JSON.stringify({ id: item.id })
                });
            }
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/image-delete", {
                method: 'POST',
                body: item.storageRef
            });
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }
    
    const DragAndDropItem = (fileList:any) =>{
        console.log(fileList);
        setTodos(fileList);
    }

    return (
        <>
            <Wrap>
                <Icon>
                    <Image src={EditIcon} width="20px" height="20px" onClick={() => setIsModalOpen(true)} />
                </Icon>
            </Wrap>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <Title1>✍️ Edit</Title1>
                <Line />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DragAndDrop InitialItemList={todo} GetItem={DragAndDropItem} DeleteItem={DeleteImage}/>
                    <Button onClick={() => setIsModalOpen(false)} width="70px">닫기</Button>
                    <Button type="submit" width="150pxdfcSWEAD">제출</Button>
                </form>
            </BasicModal>
        </>
    );
};


const Line = styled.div`
width: 40%;
border: 1px solid black;
`
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
`

export default AdminMainBannerComponent;