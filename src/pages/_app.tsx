import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../scss/index.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Портфолио</title>
        <meta property="og:title" content="Портфолио Максима Берёзки" />
        <meta property="og:locale" content="ru_RU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
