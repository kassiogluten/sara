import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useClipboard,
} from "@chakra-ui/react";

import React from "react";
import { FacebookSvg } from "../../../icons";
import { FaCheck, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

export function Content({ html, conclusao }) {
  const router = useRouter();
  const { hasCopied, onCopy } = useClipboard(
    "https://sarahjacob.com.br" + router.asPath
  );
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex py="5rem" align="center" maxW={1200} flexDir="column">
        <Box
          px={4}
          maxW={1000}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
          sx={{
            p: { textAlign: "start", fontFamily: "Nunito", fontSize: 16 },
            h3: { fontFamily: "Nunito", fontSize: 16, fontWeight: 600 },
            h2: {
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: 32,
              paddingTop: 16,
              bgGradient: "linear(to-r,#A7CC78 ,#66A9CE,#6B1F9A )",
              width: "fit-content",
              bgClip: "text",
            },
            img: { paddingY: 16, w: "full" },
            li: { textAlign: "start" },
          }}
        />
        {conclusao && (
          <Grid
            mt={32}
            alignItems="end"
            textAlign="start"
            templateColumns={{ base: "1fr", md: "1fr 4fr" }}
          >
            <GridItem px={4} rowSpan="2" /* {{ base: 1, md: 2 }} */>
              <Box
                width={150}
                height={140}
                overflow="hidden"
                mb={{ base: 0, md: 8 }}
                borderRadius="45%"
              >
                <Image
                  width={150}
                  height={150}
                  alt="Sarah Jacob"
                  src="/avatar-sarahb.jpg"
                />
              </Box>
            </GridItem>
            <GridItem>
              <Text
                fontFamily="Playfair Display"
                fontWeight={700}
                fontSize={32}
                paddingTop={16}
                bgGradient="linear(to-r,#A7CC78 ,#66A9CE,#6B1F9A )"
                width="fit-content"
                bgClip="text"
                p={4}
              >
                Conclusão
              </Text>
            </GridItem>
            <GridItem>
              <Box
                px={4}
                maxW={700}
                dangerouslySetInnerHTML={{
                  __html: conclusao,
                }}
              />
            </GridItem>
          </Grid>
        )}
        <Stack
          mt={16}
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 2, lg: 8 }}
        >
          <Botao
            icon={<FaWhatsapp size={20} />}
            link={
              "whatsapp://send?text=https://sarahjacob.com.br" + router.asPath
            }
          >
            Compartilhar no Whatsapp
          </Botao>
          <Botao
            icon={<FaInstagram size={20} />}
            link="https://www.instagram.com/sarahjacobm/"
          >
            Siga-me no Instagram
          </Botao>
          <Button
            w={300}
            colorScheme="asd"
            fontWeight="400"
            fontFamily="Nunito"
            bg={hasCopied ? "green" : "cinza"}
            color="white"
            leftIcon={hasCopied ? <FaCheck /> : <FiLink />}
            onClick={onCopy}
          >
            {hasCopied ? "Copiado" : "Copiar link"}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

function Botao({ children, icon, link }) {
  return (
    <Button
      w={300}
      colorScheme="asd"
      fontWeight="400"
      fontFamily="Nunito"
      bg="cinza"
      color="white"
      leftIcon={icon}
      as="a"
      href={link}
    >
      {children}
    </Button>
  );
}
