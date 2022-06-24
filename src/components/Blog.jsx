/* eslint-disable @next/next/link-passhref */
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import SwiperCore, { Navigation } from "swiper/core";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

/* const posts = [
  {
    title: "8 passos para melhorar seu relacionamento com o guarda-roupas",
    img: "blog1.jpg",
  },
  {
    title:
      "Vamos viajar? 5 dicas infaliveis para montar sua mala inteligente de viagem",
    img: "blog2.jpg",
  },
  {
    title: "8 passos para melhorar seu relacionamento com o guarda-roupass",
    img: "blog1.jpg",
  },
  {
    title:
      "Vamos viajar? 5 dicas infaliveis para montar sua mala inteligente de viagemm",
    img: "blog2.jpg",
  },
]; */

SwiperCore.use([Navigation]);

export function Blog({ posts }) {
  return (
    <Box align="center" w="100%" pos="relative" id="blog">
      <Flex
        p="80px 1rem"
        pr={0}
        align="start"
        textAlign="start"
        maxW={1200}
        flexDir="column"
        pos="relative"
      >
        <Heading pb={8} maxW={350} textTransform="uppercase">
          Uma leitura que vale a pena
        </Heading>
        <Posts posts={posts} />
      </Flex>
      <Image
        zIndex={-1}
        pos="absolute"
        left={0}
        top={0}
        alt="Efeito"
        src="/blur1.svg"
        id="blur"
        w={{ base: "80vw", md: "40vw" }}
      />
    </Box>
  );
}

const Posts = ({ posts }) => (
  <Swiper
    slidesPerView={"auto"}
    spaceBetween={30}
    navigation={true}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }}
    className="Blog"
  >
    {posts.map((post) => (
      <SwiperSlide key={post.slug}>
        <Flex
          as="a"
          href={`/blog/${post.slug}`}
          _hover={{ cursor: "pointer", filter:'brightness(1.20)' }}
          transition="all 300ms"
          w="100%"
          h={{ base: "375px", md: "500px" }}
          alignItems="flex-end"
          sx={{
            background: ` linear-gradient(
                180deg,
                rgba(20, 19, 20, 0) 0%,
                rgba(20, 19, 20, 0.8) 76.04%,
                #1c1c1c 100%
              ), url(${post.featuredImage?.node.mediaItemUrl}) 50% 50%`,
            backgroundSize: "cover",
          }}
        >
          <Heading
            p={{ base: 4, sm: 8 }}
            textAlign="start"
            fontFamily="Nunito"
            fontSize={{ base: 16, sm: 24 }}
            color="white"
          >
            {post.title}
          </Heading>
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
);
/* 
.Blog .swiper-slide::after {
  content: "";
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(20, 19, 20, 0) 0%,
    rgba(20, 19, 20, 0.8) 76.04%,
    #1c1c1c 100%
  );
  width: 100%;
  height: 100%;
} */
