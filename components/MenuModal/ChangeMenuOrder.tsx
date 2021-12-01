import { MenuDTO } from "../../dto/menu-create.dto";
import { useState } from "react";
import ModifyOrderDropAndDrop from "../ModifyOrderDropAndDrop";

interface Props {
  initialMenus: MenuDTO[];
}

const ChangeMenuOrder = ({ initialMenus }: Props) => {
  const [modifyOrderMenuList, setModifyOrderMenuList] = useState(initialMenus);

  const onSubmit = async () => {
    try {
      modifyOrderMenuList.forEach(async (item) => {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/menu/modify",
          {
            method: "POST",
            body: JSON.stringify(item as MenuDTO),
          }
        );
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
        InitialItemList={modifyOrderMenuList}
        GetItem={(item: MenuDTO[]) => setModifyOrderMenuList(item)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ChangeMenuOrder;
