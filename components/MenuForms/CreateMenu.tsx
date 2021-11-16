import { ImageBlock } from "../../dto/image-create.dto";
import { MenuCreateDTO } from "../../dto/menu-create.dto";
import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ImageUploadAndChange from '../ImageUploadAndChange';
import S from './Menu.style';
import { Content } from "../GlobalComponents";

const CreateMenu = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [initialItem, setInitialItem] = useState<ImageBlock>();

    const onSubmit = async (data: MenuCreateDTO) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/create", {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    image: initialItem
                } as MenuCreateDTO)
            });

            if (typeof window != null) {
                window.location.reload();
            }

        } catch (e) {
            alert(e);
        }
    }

    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.InputWrap>
                    <S.Label>메뉴 카테고리</S.Label>
                    <S.Content>메뉴 카테고리를 생성하고 싶으시면 메인에서 추가하세요</S.Content>
                    <S.Select {...register("catagory", { required: true })}>
                        <option value="김밥">김밥</option>
                        <option value="도시락">도시락</option>
                        <option value="샐러드">샐러드</option>
                        <option value="음료">음료</option>
                    </S.Select>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>메뉴 이름</S.Label>
                    <S.Input placeholder="메뉴 이름을 입력해주세요" {...register('menu', { required: true, maxLength: 20 })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>메뉴 설명</S.Label>
                    <S.Input placeholder="메뉴에 대해 짧은 설명문을 입력해주세요" {...register('content', { required: true })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>메뉴 이미지</S.Label>
                    <S.ImageInput>
                        <ImageUploadAndChange GetItem={(item: ImageBlock) => setInitialItem(item)} />
                    </S.ImageInput>
                </S.InputWrap>
                <S.Button>저장</S.Button>
            </S.Form>
        </>
    );
};

export default CreateMenu;