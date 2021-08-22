import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";

export function Products() {
  return (
    <Box align="center" w="100%">
      <Flex
        p="4rem 1rem"
        textAlign={{ base: "center", lg: "start" }}
        maxW={1200}
        flexDir="column"
      >
        <Heading pb={4} textTransform="uppercase">
          Principais serviços
        </Heading>
        <Card
          img="/pessoal.jpg"
          title="Consultoria de imagem pessoal."
          desc="Vamos realizar um processo de descobrimento sobre você, vamos definir coloração pessoal, proporção, estilo e silhueta. Depois iremos mesclar tudo e montar uma identidade visual única."
          url="/pessoal"
        ></Card>
        <Card
          img="/moda.jpg"
          title="Consultoria de design de moda."
          desc="Um serviço para pessoas e empresas que precisam de ajuda para ressignificar as roupas. Vamos em busca de tendências de moda, comportamento e estudo de cartela de cores."
          url="/moda"
        ></Card>
        <Card
          img="/empresas.jpg"
          title="Consultoria para empresas."
          desc="Meu objetivo é assessorar empresas no alinhamento da imagem pessoal e profissional para o alcance de uma comunicação mais assertiva, que transmita competência e credibilidade. "
          url="/empresas"
        ></Card>
      </Flex>
    </Box>
  );
}

const Card = ({ img, title, desc, url }) => (
  <Flex
    alignSelf="center"
    maxW={{ base: 400, lg: "none" }}
    my={4}
    borderWidth={1}
    borderColor="white"
    flexDir={{ base: "column", lg: "row" }}
    _hover={{ cursor: "pointer" }}
  >
    <Image transform="scale(1.008)" objectFit="contain" alt={title} src={img} />
    <Stack
      p={8}
      textAlign="start"
      align="start"
      justify="space-between"
      spacing={4}
    >
      <Heading maxW={280}>{title}</Heading>
      <Text>{desc}</Text>
      <Button
        bg="white"
        color="cinza"
        w={{ base: "full", lg: 300 }}
        as="a"
        href={url}
      >
        Saiba mais
      </Button>
    </Stack>
  </Flex>
);
