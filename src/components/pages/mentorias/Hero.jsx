import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";

export function Hero() {
  return (
    <Box align="center" w="100%" pos="relative">
      <Flex
        p={{ base: "4rem 1rem 8rem", lg: "15rem 1rem" }}
        textAlign="start"
        align="start"
        maxW={900}
        flexDir="column"
      >
        <Box maxW={700}>
          <Heading fontSize={{ base: "32px", md: "72px" }}>Mentorias.</Heading>
          <Text pt={24} fontSize="1rem">
            Você é profissional da área da moda e quer alavancar seu
            faturamento, aprofundar seus conhecimentos e adquirir autoconfiança?
            Eu tenho um recado para você.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
