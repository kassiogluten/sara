import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Loading } from "../components/LoadingScreen";
import { Portfolio } from "../components/Portfolio";
import { Products } from "../components/Products";
import { WhoAmI } from "../components/WhoAmI";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Sarah Jacob | Consultoria de Imagem e Design de Moda</title>
      </Head>
      {loading && <Loading />}
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
