import { MenuCreateDTO, MenuDTO } from '../../../dto/menu-create.dto';
import Image from 'next/image';
import { PageLayout } from "../../../components/GlobalComponents";
import { ButtonForm, Form, InputForm, SelectForm } from "../../../components/Form";
import { ImageBlock } from '../../../dto/image-create.dto'
import ImageUploadAndChange from '../../../components/ImageUploadAndChange';
import { useState } from 'react';

const AdminCreateMeau = () => {
    const [initialItem, setInitialItem] = useState<ImageBlock>({
        order: 0,
        storageRef: '',
        downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/meau1.png?alt=media&token=742645d6-d01a-4cac-8f10-d3e70e817f0c'
    })
    const onSubmit = async (data: MenuCreateDTO) => {
        const sendData: MenuCreateDTO = {
            ...data,
            image: {
                order: initialItem.order,
                storageRef: initialItem.storageRef,
                downloadUrl: initialItem.downloadUrl
            }
        };
        console.log(sendData);
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/create", {
            method: 'POST',
            body: JSON.stringify(sendData)
        });
    }

    const DragAndDropItem = (item: any) => {
        console.log(item);
        setInitialItem(item);
    }


    return (
        <>
            <PageLayout>
                <Form onSubmit={onSubmit}>
                    <SelectForm label="메뉴 카테고리" name="catagory" options={[
                        { value: "Gimbab", name: "김밥" },
                        { value: "LunchBox", name: "도시락" },
                        { value: "Salad", name: "샐러드" },
                        { value: "Beverage", name: "음료" },
                    ]} />
                    <InputForm label="메뉴 이름" placeholder="메뉴 이름을 입력해주세요" name="title" />
                    <InputForm label="메뉴 설명" placeholder="메뉴에 대해 짧은 설명문을 입력해주세요" name="content" />
                    <ImageUploadAndChange InitialItem={initialItem} GetItem={DragAndDropItem} />
                    <ButtonForm name="저장" />
                </Form>
            </PageLayout>
        </>
    );
};


export default AdminCreateMeau;