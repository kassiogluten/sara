import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { ScrollSvg } from "../icons";

export function Hero() {
  return (
    <Box align="center" w="100%">
      <Flex
        pos="relative"
        p={{ base: "4rem 1rem", lg: "7rem 1rem 2rem" }}
        align="center"
        maxW={1050}
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
        overflow={{ base: 'hidden', md: 'visible' }}
      >
        <VStack>
          <Heading
            sx={{ strong: { fontSize: { base: 115, sm: 155 } } }}
            letterSpacing={-3}
            lineHeight="100%"
            fontSize={{ base: "110px", sm: "148px" }}
            maxW={400}
          >
            Sarah <strong>Jacob</strong>
          </Heading>
          <Text fontSize={{ base: 12, sm: 15 }} pb="100px">
            Consultoria de Imagem e Design de Moda
          </Text>
          <Button
            display={{ base: "none", lg: "block" }}
            borderWidth={2}
            variant="outline"
            w="full"
          >
            Faça seu orçamento
          </Button>
        </VStack>
        <VStack>
          <Image mb={8} alt="Sarah Jacob" src="/sara.jpg" />
          <Button
            display={{ base: "block", lg: "none" }}
            borderWidth={2}
            variant="outline"
            w="full"
          >
            Faça seu orçamento
          </Button>
        </VStack>
        <Box 
          transform="translate(-50%, -50%)"
          zIndex={-9}
          top={{ base: "65%", lg: "50%" }}
          left={{ base: "50%", lg: "75%" }}
          w={{ base: 500, lg: 600 }}
          h={{ base: 300, lg: 400 }}
          filter="blur(100px)"
          bgGradient="linear(to-r, #6f6799, #b3748c, #9a1f37)"
          pos="absolute"
        />
      </Flex>
      <Box zIndex={9}
        onClick={() => window.scrollTo(0, 1000)}
        display={{ base: "none", md: "block" }}
        mb={18}
      >
        <ScrollSvg />
      </Box>
    </Box>
  );
}
