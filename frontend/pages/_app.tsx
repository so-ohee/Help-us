import react, {FC} from 'react';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

import Head from "next/head";
import Script from "next/script";

const MyApp:FC = ({ Component, pageProps }: AppProps)  => {
  return (
    <>
      <Head>
        <title>HELP:US</title>
        {/* 파비콘이 적용되지 않는 이유는?.. ㅜㅜ */}
        <link rel="favicon" href="/favicon.ico" />
      </Head>

      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
