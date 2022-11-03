import type { AppType } from "next/app";
import Head from "next/head";

import { trpc } from "../utils/trpc";
import { Layout } from "../components/Layout";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>eCommerce Test</title>
        <meta name="description" content="eCommerce Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default trpc.withTRPC(MyApp);
