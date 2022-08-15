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
    name: "Juliana Mattos",
    img: "/juliana.jpeg",
    job: "Dentista e Administradora",
    text: "Falar da Sarah Jacob é muito fácil! É uma profissional totalmente fora da curva. Depois da consultoria que fiz com Sarah mudei minha visão sobre as cores. E isso teve um impacto enorme em minha autoestima, principalmente na mudança de cor do meu cabelo. Sarah, obrigada pela consultoria. Obrigada por transmitir esse conhecimento maravilhoso. E que você continue impactando a autoestima das pessoas. Você é fantástica.",
  },
  {
    name: "Lara Braga",
    img: "/lara.jpeg",
    job: "Empreendedora",
    text: "Desde quando me tornei mãe pude experimentar mudanças internas extraordinárias. Crescimento pessoal, profissional, mudanças de comportamentos e pensamentos, dentre tantas outras coisas. Porém, infelizmente, deixei de olhar para minha aparência e tinha pouquíssimo autocuidado.  Até que um dia, quando finalmente encarei essa área da minha vida, percebi que minha aparência não tinha acompanhado toda a minha mudança nesses últimos anos. Eu precisava urgentemente de uma mudança! Não pensei em outra pessoa há não ser a Sarah para poder fazer parte dessa transformação! Era um momento muito importante pra mim. De reconexão comigo mesma. De alinhamento do interno com o externo. De pode mostrar ao mundo a mulher que existia dentro de mim. E ainda bem que a escolhi! A consultoria abriu meus olhos para o novo! Pude olhar para dentro de mim novamente, dessa vez de uma forma reveladora, onde eu descobria meus gostos, quem eu queria ser e transmitir por onde eu passasse. Eu era uma pessoa que achava inviável me arrumar todos os dias. Que saia de qualquer jeito, com qualquer roupa, cabelo desarrumado e de cara limpa. De certa forma isso me incomodava muito, porém eu não tinha forças pra mudar sozinha e ficava dizendo que isso era supérfluo, que não era tão importante assim ou ainda que não era uma prioridade.  Depois da consultoria de estilo, eu comecei a ter pequenos passos de autocuidado e isso tem me transformado! Não só na aparecia, mas interiormente. Tenho me arrumado diariamente. Me sinto mais linda, mais confiante, me tornei até mais disciplinada pelo simples fato de ter que encaixar o hábito de me arrumar na minha rotina! Descobri que a beleza importa sim e que ela muda tudo ao nosso redor! Sou imensamente grata a Sarah, que com tanto cuidado, profissionalismo, amor e paciência fez parte do início dessa mudança! Digo início porque ainda há muito o que mudar! Mas agora, graças a ela, eu sei o caminho! Eu sei como fazer! Por fim, digo que meu único arrependimento foi não ter feito antes!",
  },
  {
    name: "Lucrécia Santos",
    img: "/lucrecia.jpeg",
    job: "Costureira",
    text: "Melhor investimento da vida… todo mundo deveria fazer!",
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
        <VStack maxH={400} overflow="auto" align="start" textAlign="left">
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
                src={testimonial.img || "/user.png"}
                objectFit="cover"
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
