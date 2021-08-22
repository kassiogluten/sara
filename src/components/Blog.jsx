import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import SwiperCore, { Navigation } from "swiper/core";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const posts = [
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
    title: "8 passos para melhorar seu relacionamento com o guarda-roupas",
    img: "blog1.jpg",
  },
  {
    title:
      "Vamos viajar? 5 dicas infaliveis para montar sua mala inteligente de viagem",
    img: "blog2.jpg",
  },
];

SwiperCore.use([Navigation]);

export function Blog() {
  return (
    <Box align="center" w="100%" pos="relative">
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
        <Posts />
      </Flex>
      <Image pos="absolute" left={0} top={0} alt="Efeito" src="/blur1.svg"/>
    </Box>
  );
}

const Posts = () => (
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
    className="mySwiper"
  >
    {posts.map((post) => (
      <SwiperSlide key="post.img">
        <Box pos="relative">
          <Image alt={post.title} src={post.img} />
          <Heading
            p={{ base: 4, sm: 8 }}
            textAlign="start"
            fontFamily="Nunito"
            fontSize={{ base: 16, sm: 24 }}
            zIndex={99}
            color="white"
            pos="absolute"
            bottom={0}
          >
            {post.title}
          </Heading>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);
