import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import React from "react";

export function Content({ desc1, desc2, colors, gallery }) {
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex py="5rem" align="center" maxW={1200} flexDir="column">
        <Text
          maxW={360}
          fontFamily="Playfair Display"
          fontWeight={700}
          fontSize={{ base: 24, sm: 32 }}
          bgGradient={`linear(to-r,${colors.color1} ,${colors.color2},${colors.color3} )`}
          bgClip="text"
          pb={8}
        >
          Sobre o projeto
        </Text>
        <Text textAlign="start" p={4}>
          {desc1}
        </Text>
        <Text textAlign="start" p={4}>
          {desc2}
        </Text>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          w="full"
          py={8}
        >
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
          <GridItem>
            <Image alt="Foto" src={gallery} />
          </GridItem>
        </Grid>

        <Text textAlign="start" p={4}>
          {desc1}
        </Text>
        <Text textAlign="start" p={4}>
          {desc2}
        </Text>
      </Flex>
    </Box>
  );
}
