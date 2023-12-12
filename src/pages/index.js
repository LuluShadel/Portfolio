import Competence from '../components/competence';
import Hero from '../components/hero';
import Projets from '../components/projets';
import CV from '../components/cv';
import Contact from '../components/contact';
import Header from '../components/header';
import Footer from '../components/footer';


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import "../../public/lucile_thieulin.webp"



import Head from 'next/head';



 export default function Home ({t}) {

  
  return (
    <>
      <Head>
        <title>Lucile Portfolio</title>
        <meta name="description" content="Lucile's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
	<meta property="og:title" content="Portfolio Lucile THIEULIN "/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://portfolio-thieulin.vercel.app/fr"/>
	<meta property="og:image" content="../../public/lucile_thieulin.webp"/>
	<meta property="og:description" content="Mon portfolio developpeur front end React"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

        <Header />
        
       
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