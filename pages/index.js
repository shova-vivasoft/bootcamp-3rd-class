import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Table from '../components/Table';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Practicing next js</title>
      </Head>
      <Header />
      <main className='p-5'>
        <Banner />
        <Table />
      </main>
    </div>
  );
}
