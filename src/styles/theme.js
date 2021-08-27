import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Playfair Display, serif",
    body: "Nunito, sans-serif",
  },
  colors: {
    cinza: "#141314",
    cinzaclaro: "#222222",
    cinzaescuro: "#0D0D0D",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Playfair Display",
        fontWeight: 500,
        borderRadius: 0,
        py: "25px",
      },
    },
  },
  styles: {
    global: {
      input: {
        borderRadius: 0,
      },
      svg: {
        display: "inline",
      },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        bg: "cinza",
        color: "white",
      },
    },
  },
});
