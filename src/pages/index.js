import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Products } from "../components/Products";
import { WhoAmI } from "../components/WhoAmI";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah Jacob | Consultoria de Imagem e Design de Moda</title>
      </Head>
      <Header />
      <Hero />
      <Products />
      <Portfolio />
      <WhoAmI />
      <Blog />
      <Form />
      <Footer />
    </>
  );
}
