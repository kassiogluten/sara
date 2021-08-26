import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function WhoAmI() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box align="center" w="100%" background="url(/sarah2.jpg) no-repeat 60% 50%" bgSize="cover" id="quem-sou">
      <Flex
        px="1rem"
        align="start"
        textAlign="start"
        justify="center"
        maxW={1000}
        h={900}
        flexDir="column"
      >
        <Heading maxW={420} letterSpacing="-3px" fontSize={{base:'32px',sm:"120px"}} pb={14}>
          Quem sou eu?
        </Heading>
        <Text maxW={800}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo
          quam, aliquet eu rutrum quis, dignissim finibus libero. Cras sagittis
          velit sodales arcu volutpat dignissim. Quisque auctor, lorem non
          pretium viverra, elit dolor ornare diam, eget molestie velit dui ut
          orci. Sed eleifend ipsum ut eros lacinia posuere. Morbi dictum ipsum
          ut aliquam ullamcorper.
        </Text>
        <Text maxW={800} py={4}>
          Vivamus pharetra ut neque vel mollis. Morbi
          condimentum orci non nulla euismod scelerisque. Morbi et ultrices dui.
          Integer suscipit tortor facilisis, dapibus nibh nec, faucibus dui.
          Praesent congue pellentesque nunc quis ultrices. Praesent neque
          tortor, ornare in purus sit amet, mollis pellentesque lectus. Nam nunc
          dui, suscipit sed augue a, cursus efficitur sem.
        </Text>
      </Flex>
    </Box>
  );
}
