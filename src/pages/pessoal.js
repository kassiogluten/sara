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
        subtitle1="Com a consultoria de imagem, você aprenderá de forma leve, fácil e eficaz a valorizar sua beleza, alavancas sua vida profissional e pessoal, além de saber investir seu dinheiro em apenas o que te favorece."
        // subtitle2="A sua imagem diz muito sobre você. "
      />
      <Content
        colors={colors}
        heading="A sua imagem diz muito sobre você."
        desc1="Você sabia que a roupa que escolhemos pela manhã pode influenciar positivamente ou até negativamente nosso humor e ações? Ter no armário peças adequadas a nossa rotina e estilo evitam frustrações ao longo do dia."
       /*  desc2=" Ter no armário peças adequadas a nossa realidade de vida e estilo
        pessoal evitam frustrações no momento de vestir.?" */
        step1="O contato inicial é fundamental para entendermos seus desejos, objetivos pessoais e profissionais. Conversaremos para definir o melhor trabalho a ser realizado para alavancar sua imagem."
        step2="Decidido o melhor serviço, realizaremos o teste de cor, visagismo, biótipo e/ou estilo para  termos o resultado de quais peças devem permanecer, cores que vão valorizar, acessórios e formas que transmitirão exatamente sua personalidade."
        step3="O resultado do processo é a autonomia e domínio conscientes da sua aparência, comunicação e comportamento, evidenciando suas qualidades e mostrando quem você é para o mundo. "
        featuredImage="/pessoal2.jpg"
      />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
