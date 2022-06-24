import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import axios from "axios";

import React, { useState } from "react";

export function Form() {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSendMessage(data) {
    setIsLoading(true);

    try {
      const { Nome, Email, Telefone, Mensagem } = data;

      await axios.post("/api/mail/contact", {
        name: Nome,
        phone: Telefone,
        email: Email,
        message: Mensagem,
      });

      toast({
        title: "Obrigado.",
        description: "Sua mensagem foi enviada",
        status: "success",
        isClosable: true,
        position: "top",
      });

      reset({ Nome: "", Telefone: "" });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Ocorreu um erro.",
        description:
          "Por favor, tente novamente mais tarde ou entre em contato com a gente através do WhatsApp.",
        status: "error",
        isClosable: true,
        position: "top",
      });
      console.log(err);
    }
  }

  return (
    <Box align="center" w="100%" pos="relative" id="contato">
      <Flex
        p="4rem 1rem"
        align="center"
        maxW={600}
        flexDir="column"
        as="form"
        onSubmit={handleSubmit(handleSendMessage)}
      >
        <Heading pb={2}>Fale comigo</Heading>
        <VStack w="full" py={8} align="start">
          <Input
            id="Nome"
            borderColor={errors.Nome ? "red" : "white"}
            p="25px"
            placeholder="Nome"
            type="text"
            {...register("Nome", { required: true })}
          />
          {errors.Nome && <Text color="red">Nome obrigatório!</Text>}

          <Input
            id="Email"
            borderColor={errors.Email ? "red" : "white"}
            p="25px"
            placeholder="E-mail"
            type="text"
            {...register("Email", { required: true })}
          />
          {errors.Email && <Text color="red">Email obrigatório!</Text>}

          <Input
            id="Telefone"
            borderColor={errors.Telefone ? "red" : "white"}
            p="25px"
            placeholder="Telefone"
            type="text"
            {...register("Telefone", { required: true })}
          />
          {errors.Telefone && <Text color="red">Telefone obrigatório!</Text>}

          <Textarea
            h={200}
            id="Mensagem"
            placeholder="Mensagem?"
            {...register("Mensagem")}
          />
        </VStack>
        {!isValid ? (
          <Button
            sx={{ cursor: "not-allowed" }}
            opacity=".3"
            bg="white"
            color="cinza"
            h="56px"
            w="100%"
            fontSize="14px"
            onClick={() => {
              trigger();
            }}
          >
            Enviar mensagem
          </Button>
        ) : (
          <Button
            _loading={{ color: "white" }}
            isLoading={isLoading}
            h="56px"
            bg="white"
            color="cinza"
            w="full"
            type="submit"
          >
            Enviar
          </Button>
        )}
      </Flex>
      <Image
        zIndex={-1}
        pos="absolute"
        right={0}
        top={{ base: "0", sm: "-70%" }}
        alt="Efeito"
        src="/blur2.svg"
        id="blur"
        w={{ base: "80vw", md: "40vw" }}
      />
    </Box>
  );
}
