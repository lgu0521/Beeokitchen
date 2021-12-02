import { useState } from "react";
import ModifyOrderDropAndDrop from "../ModifyOrderDropAndDrop";
import { FaqDTO } from "../../dto/faq-create.dto";

interface Props {
  initialItems: FaqDTO[];
}

const ChangeFaqOrder = ({ initialItems }: Props) => {
  const [modifyOrderItemList, setModifyOrderItemList] = useState(initialItems);
  const onSubmit = async () => {
    try {
      modifyOrderItemList.forEach(async (item) => {
        console.log(item);
        await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/faq/modify", {
          method: "POST",
          body: JSON.stringify(item),
        });
      });
      if (typeof window != null) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  return (
    <>
      <ModifyOrderDropAndDrop
        InitialItemList={modifyOrderItemList}
        GetItem={(item: FaqDTO[]) => setModifyOrderItemList(item)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ChangeFaqOrder;
