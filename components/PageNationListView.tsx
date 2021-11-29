import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import GetPageNationViewList from "./GetPageNationDataList";
import { useState } from "react";
import { Title2, Title3, Title5 } from "./GlobalComponents";
import { NoticeListDTO } from "../dto/notice-create.dto";
import NoticeIcon from "../public/notice.png";
import BoradLeft from "../public/BoradLeft.png";
import BoradRight from "../public/BoradRight.png";

interface Props {
  itemList: NoticeListDTO[];
  pageSize: number;
}

const PageNationView = ({ itemList, pageSize }: Props) => {
  const itemCount = itemList.length;
  const totallPageCount = Math.ceil(itemCount / pageSize);
  const [currentCount, setCurrentCount] = useState(1);
  const viewItemList = GetPageNationViewList({
    itemList,
    pageSize,
    currentCount,
  });

  const handlePageChange = (page: number) => {
    setCurrentCount(page);
  };

  return (
    <>
      <Head>
        <Title3>
          총 <span>{itemCount}</span>개의 글이 있습니다
        </Title3>
      </Head>
      <Table>
        <Tbody>
          {viewItemList.map((item, key) => {
            const itemNum = itemCount - key - (currentCount - 1) * 7;
            if (item.isNotice) {
              return (
                <tr key={key} style={{ backgroundColor: "#F9F0EC" }}>
                  <td>
                    <Image width={36} height={26} src={NoticeIcon} />
                  </td>
                  <td>
                    <Link href={`/board/notice/${item.id}`}>
                      <a>
                        <Title3>{item.title}</Title3>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Title5>{item.datetime}</Title5>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={key}>
                  <td>
                    <Title2>{itemNum}</Title2>
                  </td>
                  <td>
                    <Link href={`/board/notice/${item.id}`}>
                      <a>
                        <Title3>{item.title}</Title3>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Title5>{item.datetime}</Title5>
                  </td>
                </tr>
              );
            }
          })}
        </Tbody>
      </Table>
      <Ul>
        <Li
          onClick={() => handlePageChange(1)}
          style={{ margin: "0px !important" }}
        >
          <Image src={BoradLeft} height={32} width={32} />
        </Li>
        {Array(totallPageCount)
          .fill(1)
          .map((page, key) => (
            <Li key={key} onClick={() => handlePageChange(key + 1)}>
              {currentCount == key + 1 ? (
                <Title2>
                  <span>{key + 1}</span>
                </Title2>
              ) : (
                <Title2>{key + 1}</Title2>
              )}
            </Li>
          ))}
        <Li
          onClick={() => handlePageChange(totallPageCount)}
          style={{ margin: "0px !important" }}
        >
          <Image src={BoradRight} height={32} width={32} />
        </Li>
      </Ul>
    </>
  );
};
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

const Li = styled.li`
  font-weight: 600;
  color: #979797;
  margin: 20px;
  cursor: pointer;
  &:hover {
    color: #175436;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
  * > span {
    color: #008b48;
  }
`;
const Tbody = styled.tbody`
  width: 100%;
  text-align: left;
  tr {
    vertical-align: middle;
    border-bottom: 2px solid #15aa5a;
    @media only screen and (max-width: 600px) {
      height: 55px;
      padding: 30px;
    }
    @media only screen and (min-width: 600px) {
      height: 80px;
    }
  }
  * {
    vertical-align: middle;
  }
  td:nth-child(1) {
    font-weight: 600;
    color: #15aa5a;
    text-align: center;
    width: 5%;
    padding: 0px 20px;
  }
  td:nth-child(2) {
    font-weight: 600;
    text-align: left;
    @media only screen and (max-width: 600px) {
      width: 40%;
    }
    @media only screen and (min-width: 600px) {
      width: 65%;
    }
    @media only screen and (min-width: 768px) {
      width: 75%;
    }
  }
  td:nth-child(3) {
    font-weight: 600;
    color: #898a8d;
    text-align: right;
    width: auto;
    padding: 0px 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-top: 5px solid #03502c;
`;

const Head = styled.div`
  font-weight: 700;
  margin: 55px 0px 20px 0px;
  span {
    color: #cc3d3d;
  }
`;
export default PageNationView;
