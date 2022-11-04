import Layout from "../components/layout";
import Head from "next/head";
import AboumeItem from "../components/about-mes/aboutme-item";


export default function AboutmeMe(){
  return (

    <Layout>
      <div className="flex flex-col items-center justify-center px-6 mb-10 min-h screen">
        <Head>
          <title>락이 포트폴리오</title>
          <meta name="description" content="차곡차곡 쌓아보자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <AboumeItem />
        </div>

      </div>
    </Layout>
      
  );
}