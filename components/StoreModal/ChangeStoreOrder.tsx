//Basic
import { useState } from 'react';
//Component
import ModifyOrderDropAndDrop from '../ModifyOrderDropAndDrop';
//DTO
import { StoreDTO } from "../../dto/store-create.dto";

interface Props {
    initialItems: StoreDTO[]
}

const ChangeStoreOrder = ({ initialItems }: Props) => {
    const [modifyOrderItemList, setModifyOrderItemList] = useState(initialItems);
    const onSubmit = async () => {
        try {
            modifyOrderItemList.forEach(async (item) => {
                console.log(item);
                await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/store/modify", {
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
                GetItem={(item: StoreDTO[]) => setModifyOrderItemList(item)} />
            <button onClick={onSubmit}>저장</button>
        </>
    );
};


export default ChangeStoreOrder