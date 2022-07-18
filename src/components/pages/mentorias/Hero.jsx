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
            Você está cansada de seguir um monte de consultora de imagem no
            Instagram, ficar escutando dicas das influenciadoras, pegar
            referências do Pinterest, mas não consegue aplicar nada disso no seu
            estilo do jeito que você gostaria?
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
