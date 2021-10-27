import styled from "styled-components";

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
            <Nav>
                <Ul>
                    <Li onClick={() => onPageChange(1)}>처음</Li>
                    {Array(totallPageCount).fill(1).map((page, key) => (
                        <Li key={key} onClick={() => onPageChange(key + 1)}>
                            {key + 1}
                        </Li>
                    ))}
                    <Li onClick={() => onPageChange(totallPageCount)}>마지막</Li>
                </Ul>
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
`
const Ul = styled.ul`
    display: table;
    margin: 0 auto;
`

const Li = styled.li`
    width:70px;
    height: 50px;
    color: white;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    padding: 5px;
    font-weight: bold;
    background-color: #175436;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #ffce32;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
`




export default PageNationButton