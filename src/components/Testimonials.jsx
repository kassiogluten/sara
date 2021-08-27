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
    img: "https://i.pravatar.cc/90",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Priscila Daiane Rodrigues",
    img: "https://i.pravatar.cc/91",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Nathan Manoel Moraes",
    img: "https://i.pravatar.cc/92",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Vitor Brenno",
    img: "https://i.pravatar.cc/93",
    job: "Consultoria de imagem pessoal.",
    text: "Adorei a experiência da análise de coloração pessoal! Achei a Sarah uma excelente profissional, super qualificada e atenciosa. Além de ela mesma conseguir analisar as tonalidades que mais combinavam com a minha pele, ela tentava nos ensinar a enxergar também! Achei isso bem interessante. Super recomendo o seu trabalho!",
  },
  {
    name: "Kassio Gluten",
    img: "https://i.pravatar.cc/94",
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
              width={97}
              height={85}
              overflow="hidden"
              mr={2}
              borderRadius="45%"
              transform="rotate(-5deg)"
            >
              <Image
                width={97}
                height={85}
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
