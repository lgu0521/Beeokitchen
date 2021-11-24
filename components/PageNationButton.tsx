import styled from "styled-components";
import { Title2 } from "./GlobalComponents";

interface Props {
    itemCount: number,
    pageSize: number,
    currentCount: number,
    onPageChange: (page: number) => void
}

const PageNationButton = ({ itemCount, pageSize, onPageChange }: Props) => {
    const totallPageCount = Math.ceil(itemCount / pageSize);
    console.log(totallPageCount);
    return (
        <>
            <Ul>
                <Li onClick={() => onPageChange(1)}>처음</Li>
                {Array(totallPageCount).fill(1).map((page, key) => (
                    <Li key={key} onClick={() => onPageChange(key + 1)}>
                        <Title2>{key + 1}</Title2>
                    </Li>
                ))}
                <Li onClick={() => onPageChange(totallPageCount)}>마지막</Li>
            </Ul>
        </>
    )
}

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Li = styled.li`
    font-weight: 600;
    color: #979797;
    margin: 20px;
    cursor: pointer;
    &:hover {
        color: #175436;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
`
export default PageNationButton