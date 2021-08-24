import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import Link from 'next/link'

import { FiMenu } from "react-icons/fi";
import React from "react";
import {
  FacebookSvg,
  InstagramSvg,
  Logo2Svg,
  LogoSvg,
  SpotifySvg,
  YoutubeSvg,
} from "../icons";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <Box
        fontFamily="Playfair Display"
        fontSize="18px"
        fontWeight={400}
        align="center"
        w="100%"
      >
        <Flex
          p="1rem"
          w="full"
          align="center"
          maxW={1200}
          justify="space-between"
        >
          <IconButton
            bg="none"
            onClick={onOpen}
            display={{ base: "flex", lg: "none" }}
          >
            {isOpen ? (
              <CloseButton color="white" size={30} />
            ) : (
              <FiMenu color="white" size={30} />
            )}
          </IconButton>
          <HStack display={{ base: "none", lg: "flex" }} spacing={10}>
            <Menu1 />
          </HStack>
          <Box display={{ base: "none", lg: "flex" }}>
            <LogoSvg />
          </Box>
          <Menu2 />
        </Flex>
        <Drawer
          placement="left"
          closeOnOverlayClick
          autoFocus={false}
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          size="full"
        >
          <DrawerContent bg="transparent">
            <DrawerHeader
              onClick={onClose}
              pt={12}
              align="end"
              bg="transparent"
            />
            <DrawerBody
              display="flex"
              flexDir="column"
              bg="cinza"
              onClick={onClose}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <VStack
                pb={4}
                fontSize={24}
                fontFamily="Playfair Display"
                spacing={10}
              >
                <Menu1 />
              </VStack>
              <Logo2Svg />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </header>
  );
}

const Menu1 = () => (
  <>
    <Link href="/">
      Home
    </Link>
    <Link href="/#servicos">
      Serviços
    </Link>
    <Link href="/#cases">
      Cases
    </Link>
    <Link href="/#blog">
      Blog
    </Link>
    <Link href="/#contato">
      Contato
    </Link>
  </>
);
const Menu2 = () => (
  <HStack spacing={10}>
    <HStack spacing={10} display={{ base: "none", lg: "flex" }}>
      <Text as="a" href="#">
        Mentorias
      </Text>
      <Text as="a" href="#">
        Cursos
      </Text>
      <Text as="a" href="#">
        Estações
      </Text>
    </HStack>
    <HStack spacing={2}>
      <a href="https://spotify.com">
        <SpotifySvg />
      </a>
      <a href="https://facebook.com">
        <FacebookSvg />
      </a>
      <a href="https://youtube.com">
        <YoutubeSvg />
      </a>
      <a href="https://instagram.com">
        <InstagramSvg />
      </a>
    </HStack>
  </HStack>
);
