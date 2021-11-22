import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { useAuth } from '../hook/AuthProvider';
import AdminHeader from '../components/AdminHeader';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { user } = useAuth();
    return (
        <>
            <Head>
                <title>비오키친</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {
                user ? <AdminHeader /> : null
            }
            <Header />
            <main>
            {children}
            </main>
            
            <Footer />
        </>
    );
};

export default Layout;