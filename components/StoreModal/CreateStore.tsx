//이미지
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StoreCreateDTO } from '../../dto/store-create.dto';
import { ImageBlock } from '../../dto/image-create.dto';
import S from '../../styles/AdminModal.style';
import ImageUploadAndChange from '../ImageUploadAndChange';
const CreateStore = () => {
    const [ImageValue, setImage] = useState<ImageBlock>();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: StoreCreateDTO) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/create", {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    image: ImageValue
                })
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
                    <S.Label>매장명</S.Label>
                    <S.Input placeholder="매장명을 입력해주세요" {...register('title', { required: true })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>매장 운영시간</S.Label>
                    <S.Input placeholder="매장 운영시간을 입력해주세요" {...register('operation', { required: true })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>매장 전화번호</S.Label>
                    <S.Input placeholder="매장 전화번호을 입력해주세요" {...register('phonenumber', { required: true })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>매장 위치</S.Label>
                    <S.Input placeholder="매장 위치를 입력해주세요" {...register('location', { required: true })} />
                </S.InputWrap>
                <S.ImageInput>
                    <ImageUploadAndChange GetItem={(item: ImageBlock) => setImage(item)} />
                </S.ImageInput>
                <S.Button>저장</S.Button>
            </S.Form>
        </>
    );
};

export default CreateStore;