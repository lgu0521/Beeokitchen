
import { useState } from 'react';
import styled from 'styled-components';
//이미지
import { useForm } from 'react-hook-form';
import { BannerCreateDTO } from '../../dto/banner-create.dto'
import { ImageBlock } from '../../dto/image-create.dto';
import ImageUploadAndChange from '../ImageUploadAndChange';
import S from '../../styles/AdminModal.style';

const CreateBanner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [initialItem, setInitialItem] = useState<ImageBlock>({} as ImageBlock);

    const onSubmit = async () => {
        try {
            if (initialItem) {
                console.log(initialItem);
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/banner/create", {
                    method: 'POST',
                    body: JSON.stringify(initialItem as BannerCreateDTO)
                });
            }
            if (typeof window != null) {
                window.location.reload();
            }

        }
        catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label>슬라이더 이미지</S.Label>
                <S.ImageInput>
                    <ImageUploadAndChange GetItem={(item: ImageBlock) => setInitialItem(item)} />
                </S.ImageInput>
                <S.Button>저장</S.Button>
            </S.Form>
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

export default CreateBanner;