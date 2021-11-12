import { MenuDTO, MenuDelelteDTO } from '../../dto/menu-create.dto';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import BasicModal from '../BasicModal';
//이미지
import EditIcon from '../../public/Edit.png'
import styled from 'styled-components';
import ModifyOrderDropAndDrop from '../ModifyOrderDropAndDrop';

interface Props {
    MenuValue: MenuDTO[]
}

const MenuModifyOrderModal = ({ MenuValue }: Props) => {
    const router = useRouter();
    const [menuValue, setMenuValue] = useState(MenuValue);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Wrap>
                <Icon>
                    <Image src={EditIcon} width="20px" height="20px" onClick={() => setIsModalOpen(true)} />
                </Icon>
            </Wrap>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <ModifyOrderDropAndDrop InitialItemList={menuValue} GetItem={DragAndDropItem} />
                <button onClick={onSubmit}>저장</button>
            </BasicModal>
        </>
    );
};


const Icon = styled.button`
    display: table-cell;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    border-radius: 100%;
    margin-left: 0px;
    border: 1px solid #175436;
`

const Wrap = styled.div`
    display: table;
    position: absolute;
    float: right;
    padding: 30px;
`
export default MenuModifyOrderModal;