/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { gql } from "@apollo/client";

import { getApolloClient } from "../../lib/apollo-client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { Hero } from "../../components/pages/portfolio/Hero";
import { Content } from "../../components/pages/portfolio/Content";
import { Form } from "../../components/Form";

const colors = { color1: "#BA9257", color2: "#B861B8", color3: "#7B55C5" };

export default function Post() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const router = useRouter();

  // const { postSlug } = router.query;

  const apolloClient = getApolloClient();

  const postSlug = router.query?.postSlug;

  async function get() {
    if (postSlug) {
      const data = await apolloClient.query({
        query: gql`
          query getPost($postSlug: ID!) {
            post(id: $postSlug, idType: SLUG) {
              date
              id
              slug
              status
              title
              content
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              portfolio {
                galeria {
                  mediaItemUrl
                }
              }
              adicionais {
                conclusao
                subtitulo
              }
            }
          }
        `,
        variables: {
          postSlug,
        },
      });
      setData(data.data.post);
      setLoading(false);
    } else {
      console.log("sem slug");
    }
    return data;
  }

  useEffect(() => {
    get();
  }, [router.query]);


  if (loading)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <>
      <Head>
        <title>{data.title} | Portfolio Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-portfolio.svg"
        title={data.title}
        img={data.featuredImage?.node.mediaItemUrl}
        subtitle1={data.adicionais?.subtitulo}
      />
      <Content
        conclusao={data.adicionais?.conclusao}
        html={data.content}
        colors={colors}
        heading="Cada estilo é único, cada pessoa é única e tem uma história."
        gallery={data.portfolio.galeria}
      />
      <Form />
      <Footer />
    </>
  );
}
