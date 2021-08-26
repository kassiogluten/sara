import Head from "next/head";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Content } from "../components/pages/portfolio/Content";
import { Hero } from "../components/pages/portfolio/Hero";

const colors = { color1: "#BA9257", color2: "#B861B8", color3: "#7B55C5" };

export default function Moda() {
  return (
    <>
      <Head>
        <title>Consultoria de design de moda. | Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-portfolio.svg"
        title="Grupo Prominas"
        img="/portfolio-prominas.jpg"
        subtitle1="Direção do styling de campanha"
      />
      <Content
        colors={colors}
        heading="Cada estilo é único, cada pessoa é única e tem uma história."
        desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula elit orci, at pretium tellus rutrum non. Integer placerat maximus sapien, quis mattis nunc imperdiet vel. "
        desc2="Sed commodo lacinia tortor a porta. Vestibulum a est et quam semper faucibus et bibendum mi. In massa odio, commodo a risus id, malesuada hendrerit urna. Integer vestibulum sagittis lectus, commodo varius elit vestibulum sed."
        gallery="/portfolio-prominas1.jpg"
      />

      <Form />
      <Footer />
    </>
  );
}
