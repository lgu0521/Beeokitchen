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
import Head from "next/head";

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
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link sizes="48x48" rel="shortcut icon" href="https://www.xn--9w3b27lmmhzmc.kr/favicon.ico"/>
        <link rel="icon" href="https://www.xn--9w3b27lmmhzmc.kr/favicon.png"/>
      </Head>
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
    </>
  );
}

export default MyApp;
