import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalFonts from "../styles/fonts";
import Layout from "../components/Layout";
import { AuthProvider } from "../hook/AuthProvider";
import AuthStateChanged from "../hook/AuthStateChanged";

function MyApp({ Component, pageProps }: AppProps) {
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
