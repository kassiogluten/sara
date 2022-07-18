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
        subtitle1="Alavanque seu negócio com a consultoria e treinamento personalizado de moda, marketing e etiqueta profissional."
      />
      <Content
        colors={colors}
        heading="Um estilo único para sua empresa."
        desc1="Por meio da consultoria de moda e etiqueta profissional, a empresa pode se posicionar no mercado se diferenciando da concorrência e alcançando a liderança, conquistando um lugar de destaque entre os consumidores. "
        step1="Conversaremos sobre as dificuldades da empresa, persona e posicionamento para que, dessa forma, possamos delinear a estratégia de treinamento de moda para os colaboradores."
        step2="Nesse momento, é definido horas, datas, materiais e local para o treinamento da equipe."
        step3="O resultado do processo é o completo domínio de moda dos colaboradores da empresa, a fim de alavancar vendas, se diferenciar dos concorrentes e trazer confiança ao consumidor."
        featuredImage="/empresas2.jpg"
      />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
