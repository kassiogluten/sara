import Head from "next/head";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Content } from "../components/pages/pessoal/Content";
import { Hero } from "../components/pages/pessoal/Hero";
import { Testimonials } from "../components/Testimonials";

const colors = { color1: "#996767", color2: "#74B28D", color3: "#1F6E9A" };

export default function Moda() {
  return (
    <>
      <Head>
        <title>Consultoria de design de moda. | Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-moda.svg"
        title="Consultoria de design de moda."
        subtitle1="O estilo pessoal de cada pessoa está baseado em nossas crenças e valores, com isso posso te afirmar que todos temos estilo, só precisamos entendermos, identificarmos e harmonizá-lo com nosso gosto pessoal e silhueta."
      />
      <Content
        colors={colors}
        heading="Cada estilo é único, cada pessoa é única e tem uma história."
        desc1="Eu busco entender você e suas histórias, para desenvolvermos seu estilo, considerando sua personalidade, aspectos de sua rotina e, principalmente, seu desejo de imagem, criando uma assinatura única, coerente com todos os aspectos da sua vida."
        step1="Vamos conversar bastante para entender seus desejos, objetivos pessoais e profissionais e estilo de vida.
        Realizaremos teste de estilo, personalidade e análise de sua silhueta."
        step2="Conforme a estação vigente, vamos analisar as peças de seu guarda-roupa junto contigo. Vou explicar e te mostrar quais peças devem permanecer, quais precisam de reformas e quais devem sair. E se necessário, peças para possível compra."
        step3=" O resultado do processo é o empoderamento e a autonomia para escolhas concientes, mostrando quem você é como você quer ser vista pelo mundo. Tudo isso é traduzido em roupas, acessórios, cores e elementos de design."
        featuredImage="/moda2.jpg"
      />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
