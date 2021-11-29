import React from "react";
import { GetServerSideProps } from "next";
import { Params } from "next/dist/server/router";
import { NoticeDetailDTO } from "../../../dto/notice-create.dto";
import dynamic from "next/dynamic";
import { ViewerProps } from "@toast-ui/react-editor";
import PageMainTitle from "../../../components/PageMainTitle";
import {
  PageMaxNoCSSLayout,
  Title4,
  Title3,
} from "../../../components/GlobalComponents";
import styled from "styled-components";
import Link from "next/link";
import { useAuth } from "../../../hook/AuthProvider";
import { PageTitleDTO } from "../../../dto/page-title.dto";
import { Router, useRouter } from "next/dist/client/router";

interface Props {
  notice: NoticeDetailDTO;
  PageTitle: PageTitleDTO;
}
const TuiNoSSRWrapper = dynamic<ViewerProps>(
  () => import("../../../components/ViewEditor"),
  {
    ssr: false,
    loading: () => <p>Loading . . .</p>,
  }
);
const TuiWrapper = React.forwardRef((props: ViewerProps, ref) => (
  <TuiNoSSRWrapper {...props} />
));
TuiWrapper.displayName = "Editor";

const NoticeDetailPage = ({ notice, PageTitle }: Props) => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div>
      <PageMainTitle {...PageTitle} />
      <PageMaxNoCSSLayout style={{ textAlign: "center" }}>
        {user ? (
          <Link href={"/admin/notice/" + notice.id}>
            <a>수정하기</a>
          </Link>
        ) : null}
        <Table>
          <Thead>
            <tr>
              <th>
                <Title3>{notice.title}</Title3>
              </th>
              <th>
                <Title3>{notice.datetime}</Title3>
              </th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <th rowSpan={2}>
                <Title4>{<TuiWrapper initialValue={notice.content} />}</Title4>
              </th>
            </tr>
          </Tbody>
        </Table>
        <Button onClick={() => router.push("/board")}>목록으로</Button>
      </PageMaxNoCSSLayout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: Params) => {
  const { id } = params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/notice/${id}`
  );
  const notice: NoticeDetailDTO = await res.json();
  const resPageTitle = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/page-title/Notice"
  );
  const PageTitle: PageTitleDTO = await resPageTitle.json();

  if (!notice) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      notice,
      PageTitle,
    },
  };
};

const Table = styled.table`
  border-bottom: 1px solid #03502c;
  text-align: left;
  @media only screen and (max-width: 600px) {
    margin: 60px 0px 40px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 80px 0px 60px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 120px 0px 100px 0px;
  }
`;
const Thead = styled.thead`
  font-weight: 600;
  tr {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    border-top: 5px solid #03502c;
    border-bottom: 5px solid #03502c;
  }
  th {
    vertical-align: middle;
    padding: 20px 20px;
  }
  th:nth-child(2) {
    color: #898a8d;
  }
`;
const Tbody = styled.tbody`
  display: inline-block;
  min-height: 500px;
  table {
    border: 1px solid black;
    border-spacing: 0;
  }
  table > thead > tr,
  table > tbody > tr {
    border: 1px solid black;
  }
  table > thead > tr > th,
  table > tbody > tr > th {
    border: 1px solid black;
  }
  table > thead > tr > td,
  table > tbody > tr > td {
    border: 1px solid black;
  }
  img {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    padding: 40px 20px;
  }
  @media only screen and (min-width: 600px) {
    padding: 50px 20px;
  }
  @media only screen and (min-width: 768px) {
    padding: 60px 20px;
  }
`;

const Button = styled.button`
  color: #404346;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 40px;
  background-color: #f9f0ec;
  border: 2px solid #cc3d3d;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #cc3d3d;
    color: white;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
`;
export default NoticeDetailPage;
