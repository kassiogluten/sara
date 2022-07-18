import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function WhoAmI() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box
      align="center"
      w="100%"
      background="url(/sarah2b.jpg) no-repeat 0% 30% / 120%"
      // bgSize="contain"
      id="quem-sou"
    >
      <Flex
        px="1rem"
        align="start"
        textAlign="start"
        justify="center"
        maxW={1000}
        h={900}
        flexDir="column"
      >
        <Heading
          maxW={420}
          letterSpacing="-3px"
          fontSize={{ base: "32px", sm: "120px" }}
          pb={14}
        >
          Quem sou eu?
        </Heading>
        <Text maxW={800}>
          Sarah Jacob, mineira, artista e admiradora da Beleza.
        </Text>
        <Text maxW={800} pb={4}>
          Apaixonada por filosofia.
        </Text>
        <Text maxW={800} pb={4}>
          Formada em Design de Moda com especialização em Análises Faciais pela
          Persoona® School, um dos maiores nomes de escolas visagistas do Brasil
          e do mundo.
        </Text>
        <Text maxW={800} pb={4}>
          Estamparia digital, fashion business, fashion law, etiqueta social e
          corte e costura, são alguns dos cursos da bagagem ao longo dos 10 anos
          de atuação no mercado da moda.
        </Text>
        <Text maxW={800} pb={4}>
          Com valores bem definidos, estratégias sólidas e um olhar analítico, a
          defesa da Beleza, da Verdade e da Bondade sempre foram pilares para
          construção de sua personalidade e objetivo de vida: transformar as
          pessoas.
        </Text>
        <Text maxW={800} pb={4}>
          Com o estudo recorrente da filosofia, antropologia e simbolismo, pôde
          enxergar além de belas roupas e maquiagens: a força que a comunicação
          e o comportamento podem fazer por alguém.
        </Text>
        <Text maxW={800} pb={4}>
          Foi por meio da observação da comunicação, do comportamento humano e
          da moda – que já estava na sua vida desde a infância – que viu a
          oportunidade de renascer a feminilidade, elegância e autoconfiança em
          mulheres.
        </Text>
      </Flex>
    </Box>
  );
}
