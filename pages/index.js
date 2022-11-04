import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>락이 포트폴리오</title>
        <meta name="description" content="차곡차곡 쌓아보자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col justify-center min-h-screen text-gray-600 itmes-center body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
