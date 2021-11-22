import { MenuDTO } from '../../dto/menu-create.dto';
import { useState } from 'react';
import Image from 'next/image';
//이미지
import EditIcon from '../../public/Edit.png'
import styled from 'styled-components';
import BasicModal from '../BasicModal';

import ModifyAndDeleteMenuValue from '../MenuModal/ModifyAndDeleteMenuValue';
import ChangeMenuOrder from '../MenuModal/ChangeMenuOrder';
import CreateMenu from '../MenuModal/CreateMenu';
interface Props {
    MenuIndex: number,
    Menus: MenuDTO[]
}

export const MenuEdit = ({ MenuIndex, Menus }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState<string>('');

    return (
        <>
            <EditWrap>
                <EditButton>
                    <Image src={EditIcon} width={30} height={30} objectFit="none" />
                </EditButton>
                <EditUl>
                    <EditLi>
                        <span onClick={() => {
                            setIsModalOpen(true);
                            setModalName("content_modify")
                        }} >메뉴 수정하기</span>
                    </EditLi>
                    <EditLi>
                        <span onClick={() => {
                            setIsModalOpen(true);
                            setModalName("order_modify")
                        }}>메뉴 순서변경</span>
                    </EditLi>
                    <EditLi>
                        <span onClick={() => {
                            setIsModalOpen(true);
                            setModalName("create")
                        }}>메뉴 추가하기</span>
                    </EditLi>
                </EditUl>
            </EditWrap>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                {
                    modalName == "content_modify" ?
                        <ModifyAndDeleteMenuValue initialMenu={Menus[MenuIndex]} />
                        : modalName == "order_modify" ?
                            <ChangeMenuOrder initialMenus={Menus} />
                            : modalName == "create" ?
                                <CreateMenu />
                                : null
                }
            </BasicModal>
        </>
    )
}


export const MenuDefaulEdit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <EditWrap>
                <EditButton>
                    <Image src={EditIcon} width={30} height={30} objectFit="none" />
                </EditButton>
                <EditUl>
                    <EditLi>
                        <span onClick={() => {
                            setIsModalOpen(true);
                        }}>메뉴 추가하기</span>
                    </EditLi>
                </EditUl>
            </EditWrap>
            <BasicModal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
                <CreateMenu />
            </BasicModal>
        </>
    )
}

const EditLi = styled.li`
    padding: 10px 0px;
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.md};
    :hover{
    background-color: #EFF6F5;
    }
`
const EditUl = styled.ul`
    display: none;
    position: absolute;
    right:0;
    background-color: white;
    min-width: 120px;
    box-shadow: 0px 0px 5px 0.1px #DDDDDD;
    z-index: 1;
    border-radius: 20px;
    padding: 10px 0px;
`
const EditWrap = styled.div`
    position: relative;
    float: right;
    &:hover ${EditUl} {
        display: block;
    }
`

const EditButton = styled.button`
    display: table-cell;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    border-radius: 100%;
    margin-left: 5px;
    border: 1px solid #175436;
    &:hover {
        box-shadow: 0px 0px 5px 0.1px #DDDDDD;
    }
`
export default { MenuEdit, MenuDefaulEdit };