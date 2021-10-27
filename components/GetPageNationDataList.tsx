
type Item = {
    id: string,
    title: string,
    content: string,
    datetime: string
}

interface Props {
    itemList: Item[],
    pageSize: number,
    currentCount: number
}

const GetPageNationVeiwList = ({ itemList, pageSize, currentCount }: Props) => {
    const startIndex = (currentCount - 1) * pageSize;
    const returnData = itemList.slice(startIndex, startIndex + pageSize);

    return returnData;
}

export default GetPageNationVeiwList;