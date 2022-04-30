import Head from 'next/head';
import Intro from '../modules/intro/Intro';
import styles from '../styles/modules/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Exercise Website</title>
        <meta name='description' content='Portfolio website exercise before creating new realtime project' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Intro />
    </div>
  );
}
