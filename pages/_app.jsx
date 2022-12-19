import React from 'react';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar";

import Layout from '../components/Layout';

import '../styles/bootstrap.min.css';
import '../styles/styles.css';

export default function App({ Component, pageProps}) {
  const router = useRouter()
  return (
    <Layout >
        <NextNProgress />
        <Component {...pageProps} key={router.asPath}/>
    </Layout>
  );
}
