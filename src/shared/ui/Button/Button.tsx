import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps extends ChakraButtonProps {}

export const Button: FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <ChakraButton {...otherProps}>{children}</ChakraButton>;
};
