import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Loading from '../components/Loading';

import {LanguageProvider} from '../context/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Muestra un cargador sencillo mientras esperamos la hidratación
  if (!isClient) {
    return (
      <>
        <Head>
          <title>Javier Herrera | AI Engineer & LangChain Specialist</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Loading />
      </>
    );
  }

  // Renderiza la aplicación solo del lado del cliente
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
