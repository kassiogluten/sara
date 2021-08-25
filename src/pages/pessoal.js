import Head from "next/head";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Content } from "../components/pages/pessoal/Content";
import { Hero } from "../components/pages/pessoal/Hero";
import { Testimonials } from "../components/Testimonials";

const colors = { color1: "#BA9257", color2: "#B861B8", color3: "#7B55C5" };

export default function Pessoal() {
  return (
    <>
      <Head>
        <title>Consultoria de imagem pessoal. | Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-pessoal.svg"
        title="Consultoria de imagem pessoal."
        subtitle1="Vamos realizar um processo de descobrimento sobre você, vamos
            definir coloração pessoal, proporção, estilo e silhueta. Depois
            iremos mesclar tudo e montar uma identidade visual única."
        subtitle2="A proposta aqui é analisar as peças de seu guarda-roupa, conforme a
        estação vigente, com base em seu estilo pessoal e silhueta."
      />
      <Content
        colors={colors}
        heading="A sua imagem diz muito sobre você."
        desc1="Você sabia que a roupa que escolhemos pela manhã, pode influenciar
        positivamente ou até negativamente em todas as ações de nosso dia?"
        desc2=" Ter no armário peças adequadas a nossa realidade de vida e estilo
        pessoal evitam frustrações no momento de vestir.?"
        step1="Vamos conversar bastante para entender seus desejos, objetivos
        pessoais e profissionais e estilo de vida. Realizaremos teste de
        estilo, personalidade e análise de sua silhueta."
        step2=" Conforme a estação vigente, vamos analisar as peças de seu
        guarda-roupa junto contigo. Vou explicar e te mostrar quais
        peças devem permanecer, quais precisam de reformas e quais devem
        sair. E se necessário, peças para possível compra."
        step3=" O resultado do processo é o empoderamento e a autonomia para
        escolhas concientes, mostrando quem você é como você quer ser
        vista pelo mundo. Tudo isso é traduzido em roupas, acessórios,
        cores e elementos de design."
        featuredImage="/pessoal2.jpg"
      />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
