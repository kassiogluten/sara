/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Image } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Loading } from "../components/LoadingScreen";
import { Portfolio } from "../components/Portfolio";
import { Products } from "../components/Products";
import { WhoAmI } from "../components/WhoAmI";
import { getApolloClient } from "../lib/apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  const apolloClient = getApolloClient();

  useEffect(async () => {
    const data = await apolloClient.query({
      query: gql`
        {
          posts(first: 20) {
            nodes {
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
              categories {
                nodes {
                  slug
                }
              }
            }
          }
        }
      `,
    });

    const posts = await data?.data.posts.nodes
      .filter((item) => item.categories.nodes[0].slug === "blog")
      .map((post) => post);

    const portfolios = await data?.data.posts.nodes
      .filter((item) => item.categories.nodes[0].slug === "portfolio")
      .map((post) => post);
    setData(posts);
    setPortfolioData(portfolios);
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Sarah Jacob | Consultoria de Imagem e Design de Moda</title>
      </Head>
      {loading && <Loading />}
      <Header />
      <Hero />
      <Products />
      <Portfolio data={portfolioData} />
      <WhoAmI />
      <Blog posts={data} />
      {/* {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <Link href={post.path} key={post.slug}>
              <a>
                <Image
                  src={post.featuredImage?.node.mediaItemUrl}
                  alt={post.title}
                />
                <h3
                  dangerouslySetInnerHTML={{
                    __html: post.title,
                  }}
                />
              </a>
            </Link>
          );
        })} */}
      <Form />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   const apolloClient = getApolloClient();

//   const data = await apolloClient.query({
//     query: gql`
//       {
//         generalSettings {
//           title
//           description
//         }
//         posts(first: 10000) {
//           edges {
//             node {
//               id
//               excerpt
//               title
//               slug
//               featuredImage {
//                 node {
//                   mediaItemUrl
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   const posts = data?.data.posts.edges
//     .map(({ node }) => node)
//     .map((post) => {
//       return {
//         ...post,
//         path: `/blog/${post.slug}`,
//       };
//     });

//   const page = {
//     ...data?.data.generalSettings,
//   };

//   return {
//     props: {
//       page,
//       posts,
//     },
//   };
// }
