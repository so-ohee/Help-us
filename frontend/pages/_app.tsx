import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HELP:US</title>
        {/* 파비콘이 적용되지 않는 이유는?.. ㅜㅜ */}
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
