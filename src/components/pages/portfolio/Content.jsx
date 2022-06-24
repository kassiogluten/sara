import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import React from "react";

export function Content({ desc1, desc2, colors, gallery, html }) {
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex py="5rem" align="start" maxW={1000} flexDir="column">
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
        <Text
          textAlign="start"
          p={4}
          dangerouslySetInnerHTML={{ __html: html }}
          sx={{ p: { pt: 3 } }}
        />

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          w="full"
          py={8}
        >
          {gallery.map((item) => (
            <GridItem key={item.mediaItemUrl}>
              <a href={item.mediaItemUrl}>
                <Image alt="Foto" src={item.mediaItemUrl} />
              </a>
            </GridItem>
          ))}
        </Grid>

        <Text textAlign="start" p={4}>
          {desc2}
        </Text>
      </Flex>
    </Box>
  );
}
