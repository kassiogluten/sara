import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";

import React from "react";

export function Content() {
  return (
    <Box
      bgRepeat="no-repeat"
      bgPos="50% 0%"
      bgSize="cover"
      bgImage="blur-mentorias.svg"
      align="center"
      w="100%"
      pos="relative"
      mt={-100}
    >
      {/* <Image minW="500px" alt="Blur" src="/blur-mentorias.svg" /> */}
      <Flex
        p="10rem 1rem"
        align="center"
        maxW={1200}
        justify="center"
        flexDir="column"
      >
        <Heading fontSize={24}>Mentoria em Estilo e Imagem Pessoal</Heading>
        <Image my={16} alt="Video" src="/mentorias.jpg" />
        <Button
          bg="white"
          color="cinza"
          maxW={1008}
          w="full"
          leftIcon={<CalendarIcon />}
        >
          {" "}
          Reservar consultoria
        </Button>
      </Flex>
    </Box>
  );
}
