import { MenuCreateDTO, MenuModifyDTO, MenuDelelteDTO } from '../../dto/menu-create.dto';
import { useForm } from 'react-hook-form';
import { GetSingleDownloadUrl } from '../GetDownloadUrl';
import BasicModal from '../BasicModal';
import { useState } from 'react';
import Image from 'next/image';
import { route } from 'next/dist/server/router';
import { Router, useRouter } from 'next/dist/client/router';

const MenuModifyAndDeleteModal = (MenuValue: MenuModifyDTO) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<MenuCreateDTO>();

    const onSubmit = async (data: MenuCreateDTO) => {
        const sendData: MenuModifyDTO = {
            id: MenuValue.id,
            title: data.title,
            content: data.content,
            catagory: data.catagory,
            url: MenuValue.url
        };

        if (data.tmpUrl.length > 0) {
            console.log(data.tmpUrl);
            const url = await GetSingleDownloadUrl(data.tmpUrl);
            sendData.url = url;
        }

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify", {
            method: 'POST',
            body: JSON.stringify(sendData)
        });

        console.log(res);
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
            <button onClick={() => setIsModalOpen(true)}>수정</button>
            <button onClick={DeleteMenu}>삭제</button>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>메뉴 카테고리</label>
                        <select {...register("catagory")} defaultValue={MenuValue.catagory}>
                            <option value="Gimbab">김밥</option>
                            <option value="LunchBox">도시락</option>
                            <option value="Salad">샐러드</option>
                            <option value="Beverage">음료</option>
                        </select>
                        <label>메뉴 이름</label>
                        <input defaultValue={MenuValue.title} {...register("title")} />
                        <label>설명</label>
                        <input defaultValue={MenuValue.content} {...register("content")} />
                        <label>이미지</label>
                        <input type="file" {...register("tmpUrl")} />
                        <button type="submit">제출</button>
                    </form>
                </div>
            </BasicModal>
        </>
    );
};

export default MenuModifyAndDeleteModal;