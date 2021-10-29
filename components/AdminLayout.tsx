import Head from 'next/head';
import styled from 'styled-components';
import AdminHeader from '../components/AdminHeader';

interface LayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>어드민 비오키친</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <AdminHeader />
            <AppContainer>
                {children}
            </AppContainer>
        </>
    );
};

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`

export default AdminLayout;