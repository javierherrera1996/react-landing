import {FC} from 'react';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Resume from '../components/Sections/Resume';
import Portfolio from '../components/Sections/Portfolio';
import Contact from '../components/Sections/Contact';
import {homepageMeta} from '../data/data';
import Head from 'next/head';

const Page: FC = () => {
  return (
    <>
      <Head>
        <title>{homepageMeta.title}</title>
        <meta content={homepageMeta.description} name="description" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Page;
