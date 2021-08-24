import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { CircleSvg } from "../../../icons";
//import { useMyContext } from "../contexts/Context";

export function Content({
  heading,
  desc1,
  desc2,
  step1,
  step2,
  step3,
  featuredImage,
  colors,
}) {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex p="5rem 1rem" align="center" maxW={1200} flexDir="column">
        <Text
          maxW={360}
          fontFamily="Playfair Display"
          fontWeight={700}
          fontSize={{ base: 24, sm: 32 }}
          bgGradient={`linear(to-r,${colors.color1} ,${colors.color2},${colors.color3} )`}
          bgClip="text"
          pb={8}
        >
          {heading}
        </Text>
        <Text pt={4} maxW={600}>
          {desc1}
        </Text>
        <Text pt={4} maxW={600}>
          {desc2}
        </Text>
        <Flex flexDir={{ base: "column", lg: "row" }} pt={36}>
          <Flex
            pos="relative"
            justify="space-evenly"
            flexDir="column"
            px={{ base: 4, lg: 24 }}
            border={{ base: "none", lg: "1px solid #e3e3e3" }}
            align="start"
            textAlign="left"
            minH={800}
          >
            <Box top={-6} pos="absolute" alignSelf="center" bg="white" px={4}>
              <Text
                fontFamily="Playfair Display"
                fontWeight={700}
                fontSize={{ base: 24, sm: 32 }}
                bgGradient={`linear(to-r,${colors.color1} ,${colors.color2},${colors.color3} )`}
                bgClip="text"
              >
                Como vai funcionar ?
              </Text>
            </Box>

            <Card colors={colors} text={step1} step="01."/>
            <Card colors={colors} text={step2} step="02."/>
            <Card colors={colors} text={step3} step="03."/>
          </Flex>
          <Image
            py={{ base: 8, lg: 0 }}
            px={{ base: 4, lg: 0 }}
            maxW="99vw"
            alt="Foto"
            src={featuredImage}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const Card = ({ colors, step, text }) => (
  <Box>
    <HStack ml={{ base: 0, lg: -24 }} pos="relative">
      <Box
        display={{ base: "none", lg: "block" }}
        mt={6}
        mr={4}
        h="1px"
        w={16}
        bg="#e3e3e3"
      />
      <Heading
        fontSize={{ base: 36, lg: 71 }}
        bgGradient={`linear(to-r,${colors.color1} ,${colors.color2},${colors.color3} )`}
        bgClip="text"
        display="inline"
        zIndex={1}
      >
        {step}
      </Heading>
      <Box
        zIndex={0}
        top={{ base: "10px", lg: "45px" }}
        left={{ base: "10px", lg: "124px" }}
        pos="absolute"
      >
        <CircleSvg />
      </Box>
    </HStack>
    <Text pt={6}>{text}</Text>
  </Box>
);
