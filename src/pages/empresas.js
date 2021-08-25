import Head from "next/head";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Content } from "../components/pages/pessoal/Content";
import { Hero } from "../components/pages/pessoal/Hero";
import { Testimonials } from "../components/Testimonials";

const colors = { color1: "#A7CC78", color2: "#7BB7D9", color3: "#6B1F9A" };

export default function Empresas() {
  return (
    <>
      <Head>
        <title>Consultoria para empresas. | Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-empresas.svg"
        title="Consultoria para empresas."
        subtitle1="Meu objetivo é assessorar empresas no alinhamento da imagem pessoal e profissional para o alcance de uma comunicação mais assertiva, que transmita competência e credibilidade. "
      />
      <Content
        colors={colors}
        heading="Um estilo único para sua empresa."
        desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mi ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        step1="Vamos conversar bastante para entender seus desejos, objetivos pessoais e profissionais e estilo de vida.
        Realizaremos teste de estilo, personalidade e análise de sua silhueta."
        step2="Conforme a estação vigente, vamos analisar as peças de seu guarda-roupa junto contigo. Vou explicar e te mostrar quais peças devem permanecer, quais precisam de reformas e quais devem sair. E se necessário, peças para possível compra."
        step3=" O resultado do processo é o empoderamento e a autonomia para escolhas concientes, mostrando quem você é como você quer ser vista pelo mundo. Tudo isso é traduzido em roupas, acessórios, cores e elementos de design."
        featuredImage="/empresas2.jpg"
      />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
