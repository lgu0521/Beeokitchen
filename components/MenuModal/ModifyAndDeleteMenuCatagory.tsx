//Basic
import { useForm } from 'react-hook-form';
import Image from 'next/image';
//DTO
import { MenuCatagoryDTO, MenuDTO } from "../../dto/menu-create.dto";
//Style
import S from '../../styles/AdminModal.style';
import DeleteIcon from '../../public/Delete.png'

interface Props {
    initialMenuCatagory: MenuCatagoryDTO
}

const ModifyAndDeleteMenuCatagory = ({ initialMenuCatagory }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: MenuDTO) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify/catagory", {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    id: initialMenuCatagory.id,
                    order: initialMenuCatagory.order
                } as MenuDTO)
            });

            if (typeof window != null) {
                window.location.reload();
            }

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const Delete = async () => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/delete/catagory", {
                method: 'POST',
                body: JSON.stringify({ id: initialMenuCatagory.id, title:initialMenuCatagory.title  })
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
                <S.InputWrap>
                    <S.Label>메뉴 카테고리</S.Label>
                    <S.Input {...register("title", { required: true, maxLength: 20 })} defaultValue={initialMenuCatagory.title} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>카테고리 설명</S.Label>
                    <S.Input  {...register("content", { required: true, maxLength: 20 })} defaultValue={initialMenuCatagory.content} />
                </S.InputWrap>
                <S.Button>제출</S.Button>
            </S.Form>
            <S.Icon>
                <Image src={DeleteIcon} width="25px" height="25px" onClick={Delete} />
            </S.Icon>
        </>
    );
};

export default ModifyAndDeleteMenuCatagory