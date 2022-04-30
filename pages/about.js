import React from 'react';
import Head from 'next/head';

export default function About() {
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
}
