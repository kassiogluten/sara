import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";

export function Hero({ effect, title, img, subtitle1 }) {
  return (
    <Box
      bgRepeat="no-repeat"
      bgPos="bottom"
      bgImage={effect}
      align="center"
      w="100%"
      pos="relative"
      pb={20}
      px={4}
    >
      <Flex
        mt={16}
        px={{ base: 8, md: "100px" }}
        py={16}
        textAlign="start"
        align="start"
        justify="flex-end"
        maxW={1200}
        flexDir="column"
        h={600}
        w="full"
        sx={{
          background: `linear-gradient(360deg, #141314 0%, rgba(20, 19, 20, 0) 100%), url(${img}) 50% 50%`,
          backgroundSize:'cover'
        }}
      >
        {/* <Image w="full" alt={title} src={img} /> */}
        <Heading py={8} fontSize={{ base: "32px", sm: "72px" }}>
          {title}
        </Heading>
        <Text maxW={530} fontSize="1rem">{subtitle1}</Text>
      </Flex>
    </Box>
  );
}
