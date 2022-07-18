import { Box, Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import React from "react";

export function Content() {
  const MotionBox = motion(Box);
  return (
    <Box overflow="hidden" align="center" w="100%" pos="relative">
      <Flex
        p="10rem 1rem"
        align="start"
        maxW={1200}
        justify="center"
        flexDir="column"
      >
        <Heading pb={8} fontSize={{ base: 28, lg: 48 }}>
          ESTAÇÕES
        </Heading>
        {/* <Image minW="500px" alt="Blur" src="/blur-mentorias.svg" /> */}
        <Card name="Primavera" img="/primavera.jpg" url="/blog/primavera" />
        <Card name="Verão" img="/verao.jpg" url="/blog/verao" />
        <Card name="Outono" img="/outono.jpg" url="/blog/outono" />
        <Card name="Inverno" img="/inverno.jpg" url="/blog/inverno" />
      </Flex>
      <MotionBox
        transform="translate(-50%, -50%)"
        zIndex={-9}
        top={{ base: "45%", lg: "53%" }}
        left={{ base: "50%", lg: "29%" }}
        w={{ base: 350, lg: 600 }}
        h={{ base: "70%", lg: 1100 }}
        bgGradient="linear(to-r, #8DA02F, #FFBF65, #D56D1E)"
        pos="absolute"
        animate={{
          filter: [
            "hue-rotate(-35deg) blur(100px)",
            "hue-rotate(15deg) blur(80px)",
          ],
        }}
        opacity={0.33}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </Box>
  );
}

function Card({ img, name, url }) {
  const router = useRouter();
  return (
    <Flex
      my={8}
      w="full"
      border="1px solid white"
      align="center"
      flexDir={{ base: "column", lg: "row" }}
      maxW={{ base: 600, lg: "unset" }}
      alignSelf="center"
      _hover={{ cursor: "pointer", background: "#ffffff11" }}
      transition="background 200ms ease"
      onClick={() => router.push(url)}
    >
      <Image
        objectFit="cover"
        height={{ base: 193, lg: 220 }}
        transform="scale(1.008)"
        alt={name}
        src={img}
        maxW={{ base: "full", lg: 600 }}
      />
      <Stack align="start" w="full" spacing={4} p={{ base: 4, lg: "8px 24px" }}>
        <Heading py={4} fontSize={{ base: 24, lg: "53px" }}>
          {name}
        </Heading>
        <Button
          py={6}
          bg="white"
          color="cinza"
          colorScheme="rs"
          w={{ base: "full", lg: 300 }}
          as="a"
        >
          Saiba mais
        </Button>
      </Stack>
    </Flex>
  );
}
