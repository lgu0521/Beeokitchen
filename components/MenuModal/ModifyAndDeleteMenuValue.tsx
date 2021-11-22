import { ImageBlock } from "../../dto/image-create.dto";
import { MenuDTO } from "../../dto/menu-create.dto";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ImageUploadAndChange from '../ImageUploadAndChange';
import S from '../../styles/AdminModal.style';
import DeleteIcon from '../../public/Delete.png'
import Image from 'next/image';

interface Props {
    initialMenu: MenuDTO
}

const ModifyAndDeleteMenuValue = ({ initialMenu }: Props) => {
    const [ImageValue, setImage] = useState(initialMenu.image as ImageBlock);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: MenuDTO) => {
        if (initialMenu.catagory != data.catagory) {
            initialMenu.order = 0;
        }

        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify", {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    id: initialMenu.id,
                    order: initialMenu.order,
                    image: ImageValue
                } as MenuDTO)
            });

            if (typeof window != null) {
                window.location.reload();
            }

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DeleteMenu = async () => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/delete", {
                method: 'POST',
                body: JSON.stringify({ id: initialMenu.id })
            });

            if (typeof window != null) {
                window.location.reload();
            }

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Select {...register("catagory", { required: true })} defaultValue={initialMenu.catagory}>
                    <option value="김밥">김밥</option>
                    <option value="도시락">도시락</option>
                    <option value="샐러드">샐러드</option>
                    <option value="음료">음료</option>
                </S.Select>
                <S.Input {...register("title", { required: true, maxLength: 20 })} defaultValue={initialMenu.title} />
                <S.Input  {...register("content", { required: true, maxLength: 20 })} defaultValue={initialMenu.content} />
                <S.ImageInput>
                    <ImageUploadAndChange InitialItem={ImageValue} GetItem={(item: ImageBlock) => setImage(item)}/>
                </S.ImageInput>
                <S.Button>제출</S.Button>
            </S.Form>
            <S.Icon>
                <Image src={DeleteIcon} width="25px" height="25px" onClick={DeleteMenu} />
            </S.Icon>
        </>
    );
};

export default ModifyAndDeleteMenuValue