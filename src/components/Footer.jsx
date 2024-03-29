import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import {
  FacebookSvg,
  HeartSvg,
  InstagramSvg,
  Logo2Svg,
  SpotifySvg,
  YoutubeSvg,
} from "../icons";
//import { useMyContext } from "../contexts/Context";

export function Footer() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box
      borderTopWidth={1}
      borderColor="cinzaclaro"
      align="center"
      w="100%"
      overflowX="hidden"
    >
      <Flex
        display={{ base: "none", sm: "flex" }}
        p="6rem 1rem 4rem"
        textAlign="start"
        justify="space-between"
        maxW={1200}
        flexWrap="wrap"
      >
        <Stack display={{ base: "none", md: "block" }} flex={1.5} p={2}>
          <Logo2Svg />
        </Stack>
        <Stack flex={1} p={2}>
          <Heading
            ml={-2}
            mb={4}
            maxW={180}
            w="full"
            p={2}
            bgGradient="linear(to-r, #1e1e1e, rgba(35,35,35,0))"
            fontSize={24}
          >
            A Sarah
          </Heading>
          <Text as="a" href="/#servicos">Conteúdos</Text>
          <Text as="a" href="/#quem-sou">
            Me conheça
          </Text>
          <Text as="a" href="/#blog">Blog</Text>
          <Text as="a" href="/#contato">Fale comigo</Text>
        </Stack>
        <Stack flex={1.2} p={2}>
          <Heading
            ml={-2}
            mb={4}
            maxW={180}
            w="full"
            p={2}
            bgGradient="linear(to-r, #1e1e1e, rgba(35,35,35,0))"
            fontSize={24}
          >
            Serviços
          </Heading>
          <Text as="a" href="/#contato">Cursos</Text>
          <Text as="a" href="/mentorias">Mentorias</Text>
          <Text as="a" href="/pessoal">Consultoria para pessoas</Text>
          <Text as="a" href="/empresas">Consultoria para empresas</Text>
          <Text as="a" href="/moda">Consultoria de design de moda</Text>
          <Text as="a" href="/estacoes">Características das estações</Text>
        </Stack>
        <Stack flex={1} p={2}>
          <Heading
            ml={-2}
            mb={4}
            maxW={180}
            w="full"
            p={2}
            bgGradient="linear(to-r, #1e1e1e, rgba(35,35,35,0))"
            fontSize={24}
          >
            Redes sociais
          </Heading>
          <HStack spacing={2}>
            <Link target="_blank" href="https://open.spotify.com/user/22hce2b56rpswifwotlapqx6i?si=DtuXZxN4SLKGBROnkaAbQQ">
              <SpotifySvg />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/sarahjacobm">
              <FacebookSvg />
            </Link>
            <Link target="_blank" href="https://youtube.com/channel/UCyXMKkEjsBb3JMjQMVD0lsw">
              <YoutubeSvg />
            </Link>
            <Link target="_blank" href="https://instagram.com/sarahjacobm">
              <InstagramSvg />
            </Link>
          </HStack>
        </Stack>
      </Flex>
      <Flex id="copyright" p="1rem" maxW={1200}>
        <Text fontSize=".9rem" p={2} w="full">
          Feito com <HeartSvg /> por Suricato Agência
        </Text>
      </Flex>
    </Box>
  );
}
