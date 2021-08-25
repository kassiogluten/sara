import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Content } from "../components/pages/estacoes/Content";

export default function Estacoes() {
  return (
    <>
      <Head>
        <title>Estações | Sarah Jacob</title>
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
