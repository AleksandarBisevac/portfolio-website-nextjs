import { Head } from 'next/head';

export const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name='description' content='About page of my exercise portfolio project' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      About
    </div>
  );
};

export default About;
