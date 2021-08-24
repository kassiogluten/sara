import {
  Box,
  Flex,
  Heading,
  HStack,
  Image as CImage,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import SwiperCore, { Pagination } from "swiper/core";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial = [
  {
    name: "Laís Olivia Castro",
    img: "https://i.pravatar.cc/80",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Priscila Daiane Rodrigues",
    img: "https://i.pravatar.cc/81",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Nathan Manoel Moraes",
    img: "https://i.pravatar.cc/82",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Vitor Brenno",
    img: "https://i.pravatar.cc/83",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Kassio Gluten",
    img: "https://i.pravatar.cc/84",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
];

SwiperCore.use([Pagination]);

export function Testimonials() {
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex p="5rem 1rem" align="center" maxW={1200}>
        <Testimonial />
      </Flex>
    </Box>
  );
}

const Testimonial = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={true}
    breakpoints={{
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}
    className="Testimonials"
  >
    {testimonial.map((testimonial) => (
      <SwiperSlide key={testimonial.name}>
        <VStack align="start" textAlign="left">
          <HStack>
            <Box
              width={87}
              height={78}
              overflow="hidden"
              mr={2}
              borderRadius="40%"
            >
              <Image
                width={87}
                height={78}
                alt={testimonial.name}
                src={testimonial.img}
              />
            </Box>
            <VStack align="start" textAlign="left">
              <Heading textAlign="start" fontSize={16} color="cinza">
                {testimonial.name}
              </Heading>
              <Text color="#999" fontSize=".9rem">
                {testimonial.job}
              </Text>
            </VStack>
          </HStack>
          <Text py={4}>&quot;{testimonial.text}&quot;</Text>
        </VStack>
      </SwiperSlide>
    ))}
  </Swiper>
);
