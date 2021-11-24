//Basic
import { useForm } from 'react-hook-form';
//DTO
import { MenuCatagoryCreateDTO } from "../../dto/menu-create.dto";
//Style
import S from '../../styles/AdminModal.style';

const CreateMenuCatagory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: MenuCatagoryCreateDTO) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/create/catagory", {
                method: 'POST',
                body: JSON.stringify({
                    ...data
                } as MenuCatagoryCreateDTO)
            });

        } catch (e) {
            alert(e);
        }
    }

    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.InputWrap>
                    <S.Label>메뉴 카테고리 명</S.Label>
                    <S.Content>메뉴 카테고리를 생성하고 싶으시면 메인에서 추가하세요</S.Content>
                    <S.Input placeholder="메뉴 카테고리 명을 입력해주세요" {...register('title', { required: true, maxLength: 20 })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>카테고리 설명</S.Label>
                    <S.Input placeholder="카테고리를 설명해주세요" {...register('content', { required: true, maxLength: 40 })} />
                </S.InputWrap>
                <S.Button>저장</S.Button>
            </S.Form>
        </>
    );
};

export default CreateMenuCatagory;