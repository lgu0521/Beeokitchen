import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalFonts from "../styles/fonts";
import Layout from "../components/Layout";
import { AuthProvider } from "../hook/AuthProvider";
import AuthStateChanged from "../hook/AuthStateChanged";
import NProgress from 'nprogress';
import '../public/nprogress.css'
import { useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [Router]);
  
  return (
    <AuthProvider>
      <AuthStateChanged>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalFonts />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default MyApp;
