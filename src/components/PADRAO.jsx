import { Box, Flex, Heading } from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function Hero() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box align="center" w="100%" >
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        
        justify="space-between"
        h={700}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Heading>Texto1</Heading>
        <Heading>Texto</Heading>
      </Flex>
    </Box>
  );
}
