import {
  Box,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import Link from "next/link";

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
          <Flex w="full" justify="space-between" display={{ base: "flex", lg: "none" }}>
            <IconButton
              bg="none"
              onClick={onOpen}
              
            >
              {isOpen ? (
                <CloseButton color="white" size={30} />
              ) : (
                <FiMenu color="white" size={30} />
              )}
            </IconButton>
            <SocialMenu />
          </Flex>
          <Flex w="full" align="center" justify="space-between" display={{ base: "none", lg: "flex" }}>
            <Flex flex={1} justify="space-between">
              <Menu1 />
            </Flex>
            <Box flex={.6}>
              <LogoSvg />
            </Box>
            <Flex flex={1} justify="space-between">
              <Menu2 />
              <SocialMenu />
            </Flex>
          </Flex>
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
              fontSize={24}
              fontFamily="Playfair Display"
            >
                <Menu1 />
                <Menu2 />
              <Box pt={8}>
                <Logo2Svg />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </header>
  );
}

const Menu1 = () => (
  <>
    <Link href="/">Home</Link>
    <Link href="/#servicos">Serviços</Link>
    <Link href="/#cases">Cases</Link>
    <Link href="/#blog">Blog</Link>
    <Link href="/#contato">Contato</Link>
  </>
);
const Menu2 = () => (
  <>
    <Link href="/mentorias">Mentorias</Link>
    <Link href="/#">Cursos</Link>
    <Link href="/">Estações</Link>
  </>
);
const SocialMenu = () => (
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
);
