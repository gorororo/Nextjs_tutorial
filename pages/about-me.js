import Layout from "../components/layout";
import Head from "next/head";


export default function AboutmeMe(){
  return (

    <Layout>
      <div className="flex flex-col items-center justify-center min-h screen mb-10 px-6">
        <Head>
          <title>락이 포트폴리오</title>
          <meta name="description" content="차곡차곡 쌓아보자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>자기소개</h1>
      </div>
    </Layout>
      
  );
}