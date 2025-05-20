import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Loading from '../components/Loading';
import { IntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const { messages, ...rest } = pageProps;

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
    <IntlProvider messages={messages} locale={rest.locale}>
      <Component {...rest} />
    </IntlProvider>
  );
}

export default MyApp;
