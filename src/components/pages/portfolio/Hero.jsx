import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";

export function Hero({ effect, title, img, subtitle1 }) {
  return (
    <Box
      id="blur"
      bgRepeat="no-repeat"
      bgPos={{ base: "100% -250%", md: "bottom" }}
      bgImage={effect}
      align="center"
      w="100%"
      pos="relative"
    >
      <Flex
        p={{ base: "4rem 1rem 8rem", lg: "8rem 1rem" }}
        textAlign="start"
        align="start"
        maxW={1200}
        flexDir="column"
      >
        <Image
          objectFit="cover"
          objectPosition="center 20%"
          maxH={424}
          px={{ base: 0, md: "100px" }}
          w="full"
          alt={title}
          src={img}
        />
        <Heading
          py={8}
          px={{ base: 0, md: "100px" }}
          fontSize={{ base: "32px", sm: "72px" }}
          letterSpacing="-2px"
        >
          {title}
        </Heading>
        <Text px={{ base: 0, md: "100px" }} fontSize="1rem">
          {subtitle1}
        </Text>
      </Flex>
    </Box>
  );
}
