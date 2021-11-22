import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Title3 } from './GlobalComponents';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import DragIcon from '../public/drag.png';

interface Props {
    InitialItemList: {
        id: string,
        order: number,
        title: string
    }[],
    GetItem: (item: any) => void
}

const MenuModifyOrderDropAndDrop = ({ InitialItemList, GetItem }: Props) => {
    console.log(InitialItemList);
    const [itemList, setItemList] = useState(InitialItemList);
    console.log(itemList);
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
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="itemList">
                {(provided) => (
                    <div {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {itemList.map((item, index) => (
                            <Draggable key={index} draggableId={item.order.toString()} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        style={{ ...provided.draggableProps.style }}>
                                        <Wrap>
                                            <Image src={DragIcon} width="30px" height="30px" />
                                            <Title3 style={{ fontWeight: 600 }}>{item.title}</Title3>
                                        </Wrap>
                                    </div>
                                )}
                            </Draggable>)
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

const Wrap = styled.div`
    width:100%;
    display: flex;
`

export default MenuModifyOrderDropAndDrop;