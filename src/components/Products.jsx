import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import React from "react";

export function Products() {
  return (
    <Box align="center" w="100%" id="servicos">
      <Flex
        p="4rem 1rem"
        textAlign={{ base: "center", lg: "start" }}
        maxW={1200}
        flexDir="column"
      >
        <Heading fontSize={48} pb={4} textTransform="uppercase">
          Principais serviços
        </Heading>
        <Card
          img="/pessoal.jpg"
          title="Consultoria de imagem pessoal"
          desc="Com a consultoria de imagem, você aprenderá de forma leve, fácil e eficaz a valorizar sua beleza, alavancar sua vida profissional e pessoal, além de saber investir seu dinheiro em apenas o que te favorece."
          url="/pessoal"
        ></Card>
        <Card
          img="/moda.jpg"
          title="Consultoria de design de moda"
          desc="Tenha o design exclusivo de uniforme para sua empresa, associando conforto, qualidade e sofisticação."
          url="/moda"
        ></Card>
        <Card
          img="/empresas.jpg"
          title="Consultoria para empresas"
          desc="Alavanque seu negócio com a consultoria e treinamento personalizado de moda, marketing e etiqueta profissional. "
          url="/empresas"
        ></Card>
      </Flex>
    </Box>
  );
}

function Card({ img, title, desc, url }) {
  const router = useRouter();
  return (
    <Flex
      alignSelf="center"
      maxW={{ base: 400, lg: "none" }}
      my={4}
      borderWidth={1}
      borderColor="white"
      flexDir={{ base: "column", lg: "row" }}
      _hover={{ cursor: "pointer", background: "cinzaclaro" }}
      onClick={() => router.push(url)}
      transition="background 200ms ease"
    >
      <Image
        transform="scale(1.008)"
        objectFit="contain"
        alt={title}
        src={img}
      />
      <Stack
        p={10}
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
          w={{ base: "full", lg: 250 }}
          as="a"
          href={url}
        >
          Saiba mais
        </Button>
      </Stack>
    </Flex>
  );
}
