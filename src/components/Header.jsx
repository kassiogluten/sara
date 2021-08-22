import {
  Box,
  Flex,
  Heading,
  Stack,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import React from "react";
import { FacebookSvg, InstagramSvg, LogoSvg, SpotifySvg, YoutubeSvg } from "../icons";

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
            <FiMenu color="white" size={30} />
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
          autoFocus={false}
          returnFocusOnClose={false}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton m={3} />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody onClick={onClose}>
              <VStack spacing={10}>
                <Menu1 />
              </VStack>
              <Button variant="outline" mr={3} onClick={onClose}>
                Botao1
              </Button>
              <Button colorScheme="blue">Botao2</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </header>
  );
}

const Menu1 = () => (
  <>
    <Text as="a" href="#">
      Home
    </Text>
    <Text as="a" href="#">
      Serviços
    </Text>
    <Text as="a" href="#">
      Cases
    </Text>
    <Text as="a" href="#">
      Blog
    </Text>
    <Text as="a" href="#">
      Contato
    </Text>
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
      <Link href="#">
        <SpotifySvg/>
      </Link>
      <Link href="#">
        <FacebookSvg/>
      </Link>
      <Link href="#">
        <YoutubeSvg/>
      </Link>
      <Link href="#">
        <InstagramSvg/>
      </Link>
    </HStack>
  </HStack>
);
