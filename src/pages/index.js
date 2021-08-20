import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TITULO</title>
      </Head>
      <Header />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}
