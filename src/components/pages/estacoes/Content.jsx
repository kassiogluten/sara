import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

export function Content() {
  return (
    <Box
      
      align="center"
      w="100%"
      pos="relative"
    >
      <Flex
        p="10rem 1rem"
        align="start"
        maxW={1200}
        justify="center"
        flexDir="column"
      >
        <Heading pb={8} fontSize={{ base: 28, lg: 48 }}>
          ESTAÇÕES
        </Heading>
        {/* <Image minW="500px" alt="Blur" src="/blur-mentorias.svg" /> */}
        <Card name="Primavera" img="/primavera.jpg" url="/primavera" />
        <Card name="Verão" img="/verao.jpg" url="/verao" />
        <Card name="Outono" img="/outono.jpg" url="/outono" />
        <Card name="Inverno" img="/inverno.jpg" url="/inverno" />
      </Flex>
    </Box>
  );
}

function Card({ img, name, url }) {
  const router = useRouter();
  return (
    <Flex
      my={8}
      w="full"
      border="1px solid white"
      align="center"
      flexDir={{ base: "column", lg: "row" }}
      maxW={{ base: 600, lg:"unset" }}
      alignSelf="center"
      _hover={{ cursor: "pointer", background:"#ffffff11" }}
      transition="background 200ms ease"
      onClick={() => router.push(url)}
    >
      <Image objectFit="cover"
        height={{ base: 193, lg: "fit-content" }}
        transform="scale(1.008)"
        alt={name}
        src={img}
      />
      <Stack align="start" w="full" spacing={4} p={{base:4, lg:"8px 24px"}}>
        <Heading py={4} fontSize={{ base: 24, lg: "53px" }}>
          {name}
        </Heading>
        <Button
          py={6}
          bg="white"
          color="cinza"
          colorScheme="rs"
          w={{ base: "full", lg: 300 }}
          as="a"
        >
          Saiba mais
        </Button>
      </Stack>
    </Flex>
  );
}
