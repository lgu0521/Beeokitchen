import styled from 'styled-components';
import { Title2, Title3 } from './GlobalComponents';

interface BoxItem {
    step: string,
    procedure: string,
}

interface GridItemProps{
    height: string,
    col: number,
    mdCol: number,
    smCol: number
}

interface GridProps extends GridItemProps{
    boxItems: BoxItem[]
}


const GridBox = ({ boxItems, height, col, mdCol, smCol }: GridProps) => {
    return (
        <>
            { boxItems.map((item, key) => (
                <GridItem key={key} height={height} col={col} mdCol={mdCol} smCol={smCol}>
                    <GridWrap>
                    <Wrap>
                    <Title2 style={FONT_STYLE}>
                        {item.step}
                    </Title2>
                    </Wrap>
                    <Wrap>
                    <Title3>
                        {item.procedure}
                    </Title3>
                    </Wrap>
                    </GridWrap>
                </GridItem>
            ))
            }
        </>
    );
};

const FONT_STYLE = {
    color: "black",
    fontWeight: 500

}

const Wrap = styled.div`
margin: 7px 0;
`
const GridWrap = styled.div`
display: table-cell;
vertical-align: middle;
`

const GridItem = styled.div<GridItemProps>`
    height: ${(props) => props.height ? props.height : '100px'};
    display: table;
    margin: 10px;
    box-sizing: border-box;
    background: #f7f7f7;
    text-align: center;
    float: left;
    @media only screen and (max-width: 600px) {
        padding: 10px 10px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 23px);
    }
    @media only screen and (min-width: 600px) {
        padding: 10px 20px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 23px);
    }
    @media only screen and (min-width: 768px) {
        padding: 10px 20px;
        width: calc(100%/${(props) => props.mdCol ? props.mdCol : 3} - 23px);
    }
    @media only screen and (min-width: 992px) {
        padding: 10px 30px;
        width: calc(100%/${(props) => props.col ? props.col : 4} - 23px);
    }
    @media only screen and (min-width: 1200px) {
        padding: 10px 30px;
        width: calc(100%/${(props) => props.col ? props.col : 4} - 23px);
    }
`

export default GridBox;