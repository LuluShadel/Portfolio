import Hero from '../components/hero';


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
      </div>
    </>
  );
};

export default Home;