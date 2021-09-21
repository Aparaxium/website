import "../css/tailwind.css";

import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ReactElement } from "react";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
