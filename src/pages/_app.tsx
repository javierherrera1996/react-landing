import {AppProps} from 'next/app';
import {LanguageProvider} from '../i18n/LanguageContext';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
