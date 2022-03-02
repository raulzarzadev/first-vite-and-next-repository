import Head from 'next/head';
import Layout from '../components/Layout';
import Welcom from '../components/Welcom';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Welcom />
    </div>
  );
}
