import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>비오키친</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <AppContainer>
                    {children}
            </AppContainer>
            <Footer />
        </>
    );
};

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`
export default Layout;