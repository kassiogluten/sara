import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sarah Jacob | Página não encontrada</title>
      </Head>
      <Header />
      <Box align="center" w="100%">
        <Flex
          pos="relative"
          p={{ base: "4rem 1rem", lg: "7rem 1rem 2rem" }}
          align="center"
          maxW={1050}
          justify="space-between"
          flexDir="column"
          h={400}
        >
          <Heading>Página não encontrada</Heading>
          <HStack>
            <Text>Erro 404 no link:</Text>
            <Badge>{router.asPath}</Badge>
          </HStack>
          <Button as="a" href="/">
            Voltar
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
