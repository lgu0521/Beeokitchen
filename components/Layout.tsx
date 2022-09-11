import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>헬키푸키</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header></Header>
        <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
