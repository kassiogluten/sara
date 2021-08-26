import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function Portfolio() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box as="section"
      flexDir={{ base: "column", sm: "row" }}
      bg="cinza"
      align="center"
      w="100%"
      display="inline-flex"
      flexWrap="wrap"
      id="cases"
    >
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={1}
        w="full"
      >
        <Port url="/portfolio" img="/portfolio-prominas1.jpg" />
        <Port />
        <Port />
        <Port />
        <Port />
        <Port />
        <Port />
        <Port />
      </Grid>
    </Box>
  );
}

const Port = ({ img, url }) => (
  <GridItem
    as="a"
    h={{ base: "50vw", lg: "25vw" }}
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPos="center top"
    bgImage={img}
    bg={img || "cinzaclaro"}
    href={url}
    _hover={{ filter: "brightness(1.1)" }}
  />
);
