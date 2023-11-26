import Competence from '../components/competence';
import Hero from '../components/hero';
import Projets from '../components/projets';
import CV from '../components/cv';
import Contact from '../components/contact';





import Head from 'next/head';


const Home = () => {
  return (
    <>
      <Head>
        <title>Lucile Portfolio</title>
        <meta name="description" content="Lucile's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Competence />
        <Projets />
        <CV />
        <Contact />
      </div>
    </>
  );
};

export default Home;