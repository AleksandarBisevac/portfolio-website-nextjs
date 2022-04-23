import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Exercise Website</title>
        <meta name='description' content='Portfolio website exercise before creating new realtime project' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      this is homepage
    </div>
  );
}
