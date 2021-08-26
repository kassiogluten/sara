import { Box, Flex, Heading, Center } from "@chakra-ui/react";

import React from "react";
import { Logo3Svg } from "../icons";
//import { useMyContext } from "../contexts/Context";

export function Loading() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box id="loading" zIndex={999} pos="fixed" overflow="hidden" bg="cinza" h="100vh" w="100%" as={Center}>
     <Logo3Svg/>
    </Box>
  );
}
