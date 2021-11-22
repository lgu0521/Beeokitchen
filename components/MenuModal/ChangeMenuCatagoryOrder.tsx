import { MenuCatagoryDTO, MenuDTO } from "../../dto/menu-create.dto";
import { useState } from 'react';
import ModifyOrderDropAndDrop from '../ModifyOrderDropAndDrop';

interface Props {
    initialMenus: MenuCatagoryDTO[]
}

const ChangeMenuOrder = ({ initialMenus }: Props) => {
    const [modifyOrderMenuList, setModifyOrderMenuList] = useState(initialMenus);

    const onSubmit = async () => {
        try {
            modifyOrderMenuList.forEach(async (item) => {
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify/catagory", {
                    method: 'POST',
                    body: JSON.stringify(item)
                });
            })
            if (typeof window != null) {
                window.location.reload();
            }
        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <ModifyOrderDropAndDrop InitialItemList={modifyOrderMenuList}
                GetItem={(item: MenuCatagoryDTO[]) => setModifyOrderMenuList(item)} />
            <button onClick={onSubmit}>저장</button>
        </>
    );
};


export default ChangeMenuOrder