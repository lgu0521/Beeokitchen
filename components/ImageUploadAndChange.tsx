import React, { ChangeEvent, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImageBlock } from '../dto/image-create.dto';
import Image from 'next/image';
import styled from 'styled-components';
import { GetSingleDownloadUrl } from './GetDownloadUrl';

interface DragAndDropInitializeProps {
    InitialItem: ImageBlock,
    GetItem: (item: any) => void
}

interface InputFileProps {
    name: string,
    index?: number,
    id?: string,
    onChangeInput: (event: ChangeEvent<HTMLInputElement>, index?: any) => Promise<void>
}

const ImageUploadAndChange = ({ InitialItem, GetItem }: DragAndDropInitializeProps) => {
    const [imageItem, setImageItem] = useState(InitialItem);

    useEffect(() => {
        GetItem(imageItem);
    }, [imageItem]);

    const deleteImageItem = async () => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/image-delete", {
                method: 'POST',
                body: imageItem.storageRef
            });
        } catch (e) {
            alert('다시 시도해주세요');
        }

    }

    const ChangeImage = async (e: any, index: number) => {
        const file: File[] = e.target.files;
        if (file.length > 0) {
            const getSingleDownloadUrl = await GetSingleDownloadUrl(file);
            const item = {
                order: 0,
                storageRef: getSingleDownloadUrl.storageRef,
                downloadUrl: getSingleDownloadUrl.downloadUrl
            };
            setImageItem(item);
        } else {
            //업로드한 파일이 없을때
        }
    }

    return (
        <>
            <ImageBox>
                <Image src={imageItem.downloadUrl} width="350px" height="200px" layout="fixed" />
                <InputFile onChangeInput={ChangeImage} name="이미지 바꾸기" />
                <button onClick={() => { deleteImageItem }}>삭제</button>
            </ImageBox>
        </>
    );
};

const InputFile = ({ onChangeInput, name, id, index }: InputFileProps) => {
    return (
        <>
            <Label htmlFor={id ? id : "addImage"}>{name}</Label>
            <input onChange={(e) => onChangeInput(e, index != undefined ? index : null)} type="file" id={id ? id : "addImage"} />
        </>
    )
}

const Label = styled.label`
padding: 6px 25px;
  background-color:#FF6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`

const ImageBox = styled.div`
    border: 1px solid #D2D4DE;
    border-radius: 20px;
    width: 100%;
    background-color: white;
    padding: 10px 20px;
`

export default ImageUploadAndChange;