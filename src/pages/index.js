import Competence from '../components/competence';
import Hero from '../components/hero';
import Projets from '../components/projets';
import CV from '../components/cv';
import Contact from '../components/contact';
import Header from '../components/header';
import Footer from '../components/footer';
import Switchlangue from '../components/SwitchLanguage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';





import Head from 'next/head';



 export default function Home ({t}) {

  
  return (
    <>
      <Head>
        <title>Lucile Portfolio</title>
        <meta name="description" content="Lucile's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

        <Header t={t} />
        <Switchlangue />
       
        <Hero />
        
        <Competence />
        <Projets />
        <CV />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};