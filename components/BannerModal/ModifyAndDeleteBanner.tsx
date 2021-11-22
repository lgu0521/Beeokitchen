
import { useState } from 'react';
//이미지
import { useForm } from 'react-hook-form';
import { BannerDTO } from '../../dto/banner-create.dto'
import { ImageBlocks } from '../../dto/image-create.dto';
import S from '../../styles/AdminModal.style';
import DragAndDrop from '../DragAndDrop'

interface Props {
    initialItems: BannerDTO[]
}

const ModifyAndDeleteBanner = ({ initialItems }: Props) => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [initialItem, setInitialItem] = useState<BannerDTO[]>(initialItems);
    const onSubmit = async (data: ImageBlocks) => {
        try {
            initialItem.map(async (item, index) => {
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
            });
            if (typeof window != null) {
                window.location.reload();
            }
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DeleteImage = async (item: any) => {
        try {
            if (item.id) {
                await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/banner/delete', {
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

    return (
        <>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <DragAndDrop InitialItemList={initialItem} GetItem={(item: BannerDTO[]) => setInitialItem(item)} DeleteItem={DeleteImage} />
                <S.Button>저장</S.Button>
            </S.Form>
        </>
    );
};

export default ModifyAndDeleteBanner;