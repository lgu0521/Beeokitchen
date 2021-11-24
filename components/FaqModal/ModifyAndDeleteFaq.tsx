import { FaqDTO } from '../../dto/faq-create.dto';
import Image from 'next/image';
// component
import DeleteIcon from '../../public/Delete.png'
import styled from 'styled-components';
//Style
import S from '../../styles/AdminModal.style';
import { useForm } from 'react-hook-form';

interface Props {
    initialItem: FaqDTO
}

const ModifyAndDeleteFaq = ({ initialItem }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: FaqDTO) => {
        const sendData: FaqDTO = {
            ...data,
            id: initialItem.id,
            order: initialItem.order
        };
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/modify", {
                method: 'POST',
                body: JSON.stringify(sendData)
            });
            if (typeof window != undefined) {
                window.location.reload();
            }
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DeleteDoc = async () => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/delete", {
                method: 'POST',
                body: JSON.stringify({ id: initialItem.id })
            });
            if (typeof window != undefined) {
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
                    <S.Label>FAQ 제목</S.Label>
                    <S.Input defaultValue={initialItem.title} {...register('title', { required: true, maxLength: 60 })} />
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>FAQ 내용</S.Label>
                    <textarea defaultValue={initialItem.content} {...register('content', { required: true, maxLength: 200 })} />
                </S.InputWrap>
                <S.Button>저장</S.Button>
            </S.Form>
            <Icon>
                <Image src={DeleteIcon} width="25px" height="25px" onClick={DeleteDoc} />
            </Icon>
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

export default ModifyAndDeleteFaq;