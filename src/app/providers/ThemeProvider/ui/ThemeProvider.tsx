import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  return <ChakraProvider>{children}</ChakraProvider>;
};
