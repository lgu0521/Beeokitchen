import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import Image from "next/image";
import S from "../styles/AdminPage.style";
import DroppableIcon from "../public/admin/droppable.png";

interface Props {
  InitialItemList: {
    id: string;
    order: number;
    title: string;
  }[];
  GetItem: (item: any) => void;
  onSubmit: () => void;
}

const MenuModifyOrderDropAndDrop = ({
  InitialItemList,
  GetItem,
  onSubmit,
}: Props) => {
  const [itemList, setItemList] = useState(InitialItemList);

  useEffect(() => {
    GetItem(itemList);
  }, [itemList]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...itemList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    items.map((item, index) => {
      item.order = (index as number) + 1;
    });
    setItemList(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="itemList">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item: any, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <S.DroppableLi
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <li>
                        <Image src={DroppableIcon} width={24} height={24} />
                      </li>
                      <li>
                        <S.LabelWrap>
                          <S.Label>{item.title}</S.Label>
                        </S.LabelWrap>
                      </li>
                    </S.DroppableLi>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <S.Button onClick={onSubmit}>저장</S.Button>
    </>
  );
};

export default MenuModifyOrderDropAndDrop;
