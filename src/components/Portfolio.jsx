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
    <Box
      flexDir={{ base: "column", sm: "row" }}
      bg="gray.900"
      align="center"
      w="100%"
      display="inline-flex"
      flexWrap="wrap"
      id="cases"
    >
      <Grid
        h={{ base: "200vw", lg: "50vw" }}
        templateRows={{base:'repeat(4, 1fr)', lg: "repeat(2, 1fr)"}}
        templateColumns={{base:'repeat(2, 1fr)', lg: "repeat(4, 1fr)"}}
        gap={1}
        w="full"
      >
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
        <GridItem rowSpan={1} colSpan={1} bg="cinza" _hover={{bg:'cinzaescuro', cursor:'pointer'}}/>
      </Grid>
    </Box>
  );
}
