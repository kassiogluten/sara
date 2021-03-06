/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { gql } from "@apollo/client";

import { getApolloClient } from "../../lib/apollo-client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/pages/blog/Hero";
import { Content } from "../../components/pages/blog/Content";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Center, Spinner } from "@chakra-ui/react";

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
        <title>{data.title} | Blog Sarah Jacob</title>
      </Head>
      <Header />
      <Hero
        effect="/blur-portfolio.svg"
        title={data.title}
        img={data.featuredImage?.node.mediaItemUrl}
        subtitle1={data.adicionais?.subtitulo}
      />
      <Content conclusao={data.adicionais?.conclusao} html={data.content} />
      <Footer />
    </>
  );
}

// export async function getStaticProps({ params = {} } = {}) {
//   const { postSlug } = params;

//   const apolloClient = getApolloClient();

//   const data = await apolloClient.query({
//     query: gql`
//       query PostBySlug($slug: String!) {
//         generalSettings {
//           title
//         }
//         postBy(slug: $slug) {
//           id
//           content
//           title
//           slug
//           adicionais {
//             conclusao
//             subtitulo
//           }
//           featuredImage {
//             node {
//               mediaItemUrl
//             }
//           }
//         }
//       }
//     `,
//     variables: {
//       slug: postSlug,
//     },
//   });

//   const post = data?.data.postBy;

//   const site = {
//     ...data?.data.generalSettings,
//   };
//   return {
//     props: {
//       post,
//       site,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const apolloClient = getApolloClient();

//   const data = await apolloClient.query({
//     query: gql`
//       {
//         posts(first: 10000) {
//           edges {
//             node {
//               id
//               title
//               slug
//             }
//           }
//         }
//       }
//     `,
//   });

//   const posts = data?.data.posts.edges.map(({ node }) => node);

//   return {
//     paths: posts.map(({ slug }) => {
//       return {
//         params: {
//           postSlug: slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
