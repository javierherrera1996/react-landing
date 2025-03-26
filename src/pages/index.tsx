import {NextPage} from 'next';
import Head from 'next/head';
import {memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import {homepageMeta} from '../data/data';
import {LanguageProvider} from '../i18n/LanguageContext';

const Home: NextPage = memo(() => {
  return (
    <>
      <Head>
        <title>{homepageMeta.title}</title>
        <meta content={homepageMeta.description} name="description" />
      </Head>
      <LanguageProvider>
        <Page>
          <Header />
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </Page>
      </LanguageProvider>
    </>
  );
});

Home.displayName = 'Home';
export default Home;
