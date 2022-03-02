import styled from "styled-components";
import { FranChiseDTO } from "../dto/franchise.dto";
import { Title2, Title3, Title4 } from "./GlobalComponents";

interface GridItemProps {
  height: string;
  col: number;
  mdCol: number;
  smCol: number;
}

interface GridProps extends GridItemProps {
  boxItems: FranChiseDTO[];
}

const GridBox = ({ boxItems, height, col, mdCol, smCol }: GridProps) => {
  return (
    <>
      <ContentBox>
        {boxItems.map((item, key) => (
          <GridItem
            key={key}
            height={height}
            col={col}
            mdCol={mdCol}
            smCol={smCol}
          >
            <Wrap>
              <Title4
                style={{
                  marginBottom: "9px",
                  fontWeight: 900,
                  color: "#404346",
                }}
              >
                Step {key + 1 < 10 ? `0${key + 1}` : key + 1}
              </Title4>
              <Title3 style={{ fontWeight: 600, color: "#404346" }}>
                {item.description}
              </Title3>
            </Wrap>
          </GridItem>
        ))}
      </ContentBox>
    </>
  );
};

const Wrap = styled.div``;
const ContentBox = styled.div`
  display: inline-block;
  line-height: 170%;
  @media only screen and (max-width: 600px) {
    margin: 20px 0px 0px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 30px 0px 0px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 40px 0px 0px 0px;
  }
`;
const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  float: left;
  text-align: center;
  border: 2px solid #d15b56;
  @media only screen and (max-width: 600px) {
    height: 60px;
    border-radius: 15px;
    margin: 5px 7px;
    width: calc(100% / ${(props) => (props.smCol ? props.smCol : 2)} - 14px);
  }
  @media only screen and (min-width: 600px) {
    height: 70px;
    border-radius: 15px;
    margin: 5px 10px;
    width: calc(100% / ${(props) => (props.smCol ? props.smCol : 2)} - 20px);
  }
  @media only screen and (min-width: 768px) {
    height: 100px;
    border-radius: 20px;
    margin: 5px 10px;
    width: calc(100% / ${(props) => (props.mdCol ? props.mdCol : 3)} - 20px);
  }
  @media only screen and (min-width: 992px) {
    margin: 10px;
    width: calc(100% / ${(props) => (props.col ? props.col : 4)} - 20px);
  }
  background: #f9f0ec;
  cursor: pointer;

  :hover {
    background: #cc3d3d;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
    ${Wrap} > * {
      color: white !important;
    }
  }
`;

export default GridBox;
