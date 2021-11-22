import { MenuDTO } from "../../dto/menu-create.dto";
import { useState } from 'react';
import S from '../../styles/AdminModal.style';
import ModifyOrderDropAndDrop from '../ModifyOrderDropAndDrop';
import { FaqDTO } from "../../dto/faq-create.dto";

interface Props {
    initialItems: FaqDTO[]
}

const ChangeFaqOrder = ({ initialItems }: Props) => {
    const [modifyOrderItemList, setModifyOrderItemList] = useState(initialItems);
    const onSubmit = async () => {
        try {
            modifyOrderItemList.forEach(async (item) => {
                console.log(item);
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/modify", {
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
            <ModifyOrderDropAndDrop InitialItemList={modifyOrderItemList}
                GetItem={(item: FaqDTO[]) => setModifyOrderItemList(item)} />
            <button onClick={onSubmit}>저장</button>
        </>
    );
};


export default ChangeFaqOrder