import Head from "next/head";
import { gql } from "@apollo/client";

import { getApolloClient } from "../../lib/apollo-client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/pages/blog/Hero";
import { Content } from "../../components/pages/blog/Content";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Blog Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-portfolio.svg"
        title={post.title}
        img={post.featuredImage.node.mediaItemUrl}
        subtitle1={post.adicionais.subtitulo}
      />
      <Content conclusao={post.adicionais.conclusao} html={post.content} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
          adicionais {
            conclusao
            subtitulo
            fieldGroupName
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    `,
    variables: {
      slug: postSlug,
    },
  });

  const post = data?.data.postBy;

  const site = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      post,
      site,
    },
  };
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges.map(({ node }) => node);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          postSlug: slug,
        },
      };
    }),
    fallback: false,
  };
}
