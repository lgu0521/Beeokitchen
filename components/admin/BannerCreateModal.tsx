import { MenuCreateDTO, MenuModifyDTO, MenuDelelteDTO } from '../../dto/menu-create.dto';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
// component
import { GetSingleDownloadUrl } from '../GetDownloadUrl';
import { Form, InputForm, ButtonForm, SelectForm } from '../Form';
import BasicModal from '../BasicModal';
//이미지
import EditIcon from '../../public/Edit.png'
import DeleteIcon from '../../public/Delete.png'
import styled from 'styled-components';

const MenuModifyAndDeleteModal = (MenuValue: MenuModifyDTO) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = async (data: MenuCreateDTO) => {
        const sendData: MenuModifyDTO = {
            id: MenuValue.id,
            title: data.title,
            content: data.content,
            catagory: data.catagory,
            url: MenuValue.url
        };

        if (data.tmpUrl.length > 0) {
            const url = await GetSingleDownloadUrl(data.tmpUrl);
            sendData.url = url;
        }
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify", {
                method: 'POST',
                body: JSON.stringify(sendData)
            });

            setIsModalOpen(false);
            router.push('/menu');

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DeleteMenu = async () => {
        const deleteData: MenuDelelteDTO = {
            id: MenuValue.id,
            catagory: MenuValue.catagory
        };
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/delete", {
                method: 'POST',
                body: JSON.stringify(deleteData)
            });
            alert('삭제되었습니다');
            router.push('/menu');
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <Form onSubmit={onSubmit}>
                    <SelectForm name="catagory" label="메뉴 카테고리" defaultValue={MenuValue.catagory} options={[
                        { value: "Gimbab", name: "김밥" },
                        { value: "도시락", name: "도시락" },
                        { value: "샐러드", name: "샐러드" },
                        { value: "음료", name: "음료" }]} />
                    <InputForm label="메뉴 이름" defaultValue={MenuValue.title} name="title" />
                    <InputForm label="설명" defaultValue={MenuValue.content} name="content" />
                    <InputForm label="이미지" type="file" name="tmpUrl" />
                    <Wrap>
                        <Icon>
                            <Image src={EditIcon} width="20px" height="20px" onClick={() => setIsModalOpen(true)} />
                        </Icon>
                        <ButtonForm name="제출" />
                    </Wrap>

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
`
export default MenuModifyAndDeleteModal;