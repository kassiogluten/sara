import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content } from "../components/pages/mentorias/Content";
import { Hero } from "../components/pages/mentorias/Hero";

export default function Mentorias() {
  return (
    <>
      <Head>
        <title>Mentorias | Sarah Jacob</title>
      </Head>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
