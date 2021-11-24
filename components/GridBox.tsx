import styled from 'styled-components';
import { Title2, Title3, Title4 } from './GlobalComponents';

interface BoxItem {
    step: string,
    procedure: string,
}

interface GridItemProps {
    height: string,
    col: number,
    mdCol: number,
    smCol: number
}

interface GridProps extends GridItemProps {
    boxItems: BoxItem[]
}


const GridBox = ({ boxItems, height, col, mdCol, smCol }: GridProps) => {
    return (
        <>
        <ContentBox>
            {boxItems.map((item, key) => (
                <GridItem key={key} height={height} col={col} mdCol={mdCol} smCol={smCol}>
                    <Wrap>
                        <Title4 style={{ marginBottom: "9px", fontWeight: 900,color:"#404346" }}>
                            {item.step}
                        </Title4>
                        <Title3 style={{ fontWeight: 700, color:"#404346" }}>
                            {item.procedure}
                        </Title3>
                    </Wrap>
                </GridItem>
            ))
            }
            </ContentBox>
        </>
    );
};


const Wrap = styled.div`
    
`
const ContentBox = styled.div`
    display: inline-block;
    line-height: 170%;
    @media only screen and (max-width: 600px) {
        margin: 20px 10px 40px 10px;
    }
    @media only screen and (min-width: 600px) {
        margin: 30px 0px 80px 0px;
    }
    @media only screen and (min-width: 768px) {
        margin: 40px 0px 120px 0px;
    }
`
const GridItem = styled.div<GridItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    float:left;
    text-align: center;
    border: 2px solid #CC3D3D;
    @media only screen and (max-width: 600px) {
        height: 70px;
        border-radius: 15px;
    }
    @media only screen and (min-width: 600px) {
        height: 70px;
        border-radius: 15px;
    }
    @media only screen and (min-width: 768px) {
        height: 100px;
        border-radius: 20px;
    }
    background: #F9F0EC;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        margin: 5px 5px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 10px);
    }
    @media only screen and (min-width: 600px) {
        margin: 5px 10px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 20px);
    }
    @media only screen and (min-width: 768px) {
        margin: 5px 10px;
        width: calc(100%/${(props) => props.mdCol ? props.mdCol : 3} - 20px);
    }
    @media only screen and (min-width: 992px) {
        margin: 10px;
        width: calc(100%/${(props) => props.col ? props.col : 4} - 20px);
    }
    :hover{
        background: #CC3D3D;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
        ${Wrap} > *{
            color: white !important;
        }
        
    }
`

export default GridBox;