import '../styles/globals.css';

import type {AppProps} from 'next/app';
import {FC, memo} from 'react';

import {LanguageProvider} from '../i18n/LanguageContext';

const App: FC<AppProps> = memo(({Component, pageProps}) => {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
});

App.displayName = 'App';
export default App;
