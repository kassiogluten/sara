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
import { ScrollSvg } from "../../../icons";

export function Hero({effect, title, subtitle1, subtitle2}) {
  return (
    <Box id="blur" bgRepeat="no-repeat" bgPos="bottom" bgImage={effect} align="center" w="100%" pos="relative">
      <Flex
        p={{ base: "4rem 1rem 8rem", lg: "15rem 1rem" }}
        textAlign="start"
        align="start"
        maxW={900}
        flexDir="column"
        
      >
        <Box maxW={700}>
          <Heading fontSize={{ base: "32px", sm: "72px" }}>
            {title}
          </Heading>
          <Text pt={24} fontSize="1rem">
           {subtitle1}
          </Text>
          <Text pt={4} fontSize="1rem">
            {subtitle2}
          </Text>
        </Box>
      </Flex>
      
    </Box>
  );
}
