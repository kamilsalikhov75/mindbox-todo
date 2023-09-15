import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface InputProps extends ChakraInputProps {}

export const Input: FC<InputProps> = (props) => {
  return <ChakraInput {...props} />;
};
