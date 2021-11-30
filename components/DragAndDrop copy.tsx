import React, { ChangeEvent, Children, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ImageBlock } from "../dto/image-create.dto";

interface DragAndDropInitializeProps {
  InitialItemList: ImageBlock[];
  DeleteItem: (item: any) => Promise<void>;
  GetItem: (item: any) => void;
}

const DragAndDrop = ({
  InitialItemList,
  DeleteItem,
  GetItem,
}: DragAndDropInitializeProps) => {
  const [itemList, setItemList] = useState(InitialItemList);

  useEffect(() => {
    GetItem(itemList);
  }, [itemList, InitialItemList]);

  const deleteAndSetItemList = (deleteItem: number) => {
    DeleteItem(itemList[deleteItem]);
    const items = [...itemList];
    items.splice(deleteItem, 1);
    items.map((item, index) => {
      item.order = index as number;
    });

    setItemList(items);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...itemList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    items.map((item, index) => {
      item.order = index as number;
    });

    setItemList(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="itemList">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={item.order.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {Children}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
