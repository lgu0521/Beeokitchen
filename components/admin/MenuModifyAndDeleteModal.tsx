import { MenuDTO, MenuDelelteDTO, MenuCreateDTO } from '../../dto/menu-create.dto';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
// component
import { Form, InputForm, ButtonForm, SelectForm } from '../Form';
import BasicModal from '../BasicModal';
import ImageUploadAndChange from '../ImageUploadAndChange';
//이미지
import EditIcon from '../../public/Edit.png'
import DeleteIcon from '../../public/Delete.png'
import styled from 'styled-components';
import ModifyOrderDropAndDrop from '../ModifyOrderDropAndDrop';
import { ImageBlock } from '../../dto/image-create.dto';

interface MenuModifyAndDeleteModalProps {
    MenuValue: MenuDTO
}

const AdminCreateMeau = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
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
           <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
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
            </BasicModal>
        </>
    );
};


const MenuModifyAndDeleteModal = ({ MenuValue }: MenuModifyAndDeleteModalProps) => {
    const router = useRouter();
    const [ImageValue, setImage] = useState({
        order: MenuValue.image.orderList,
        storageRef: MenuValue.image.storageRef,
        downloadUrl: MenuValue.image.downloadUrl
    });
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onSubmit = async (data: MenuDTO) => {
        const sendData: MenuDTO = {
            id: MenuValue.id,
            title: data.title,
            content: data.content,
            catagory: data.catagory,
            orderList: MenuValue.orderList,
            image: {
                order: ImageValue.order,
                storageRef: ImageValue.storageRef,
                downloadUrl: ImageValue.downloadUrl
            }
        };

        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify", {
                method: 'POST',
                body: JSON.stringify(sendData)
            });

            setIsModalOpen(false);
            router.push('/menu');

        } catch (e) {
            alert('다시 시도해주세요');
        }
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

    const DragAndDropItem = (item: any) => {
        console.log(item);
        setImage(item);
    }


    return (
        <>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <Form onSubmit={onSubmit}>
                    <SelectForm name="catagory" label="메뉴 카테고리" defaultValue={MenuValue.catagory} options={[
                        { value: "Gimbab", name: "김밥" },
                        { value: "도시락", name: "도시락" },
                        { value: "샐러드", name: "샐러드" },
                        { value: "음료", name: "음료" }]} />
                    <InputForm label="메뉴 이름" defaultValue={MenuValue.title} name="title" />
                    <InputForm label="설명" defaultValue={MenuValue.content} name="content" />
                    <ImageUploadAndChange InitialItem={MenuValue.image} GetItem={DragAndDropItem} />
                    <ButtonForm name="제출" />
                </Form>
                <Icon>
                    <Image src={DeleteIcon} width="25px" height="25px" onClick={DeleteMenu} />
                </Icon>
            </BasicModal>
        </>
    );
};

interface MenuModifyOrderModalProps{
    MenuList: MenuDTO[]
}

const MenuModifyOrderModal = ({MenuList}: MenuModifyOrderModalProps) => {
    const router = useRouter();
    const [menuValue, setMenuValue] = useState(MenuList);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onSubmit = async () => {
        try {
            menuValue.forEach(async (item) => {
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify", {
                    method: 'POST',
                    body: JSON.stringify(item)
                });
            })

            setIsModalOpen(false);
            router.push('/menu');

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    const DragAndDropItem = (item: any) => {
        setMenuValue(item);
    }

    return (
        <>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <ModifyOrderDropAndDrop InitialItemList={menuValue} GetItem={DragAndDropItem} />
                <button onClick={onSubmit}>저장</button>
            </BasicModal>
        </>
    );
};

interface Props {
    MenuValue: MenuDTO,
    MenuList: MenuDTO[]
}

const MenuModifyIcon = ({ MenuValue, MenuList }: Props) => {
    const [modalName, setModalName] = useState<string>('');
    return (
        <>
            <div>
                <ul>
                    <li>
                        <span onClick={() => setModalName("content_modify")} >메뉴 수정하기</span>
                    </li>
                    <li>
                        <span onClick={() => setModalName("order_modify")}>메뉴 순서변경</span>
                    </li>
                    <li>
                        <span onClick={() => setModalName("create")}>메뉴 추가하기</span>
                    </li>
                </ul>
            </div>
            {
                modalName == "content_modify" ?
                <>
                    <MenuModifyAndDeleteModal MenuValue={MenuValue}/>
                    </>
                    : modalName == "order_modify" ?
                            <MenuModifyOrderModal MenuList={MenuList}/>
                        : modalName == "create" ?
                        <AdminCreateMeau/>
                        :null
            }
        </>
    )
}
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
export default MenuModifyIcon;