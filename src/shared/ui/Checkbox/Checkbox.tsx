import {
    Checkbox as ChakraCheckbox,
    CheckboxProps as ChakraCheckboxProps,
  } from "@chakra-ui/react";
  import { FC } from "react";
  
  interface CheckboxProps extends ChakraCheckboxProps {}
  
  export const Checkbox: FC<CheckboxProps> = (props) => {
    const { children, ...otherProps } = props;
    return <ChakraCheckbox {...otherProps}>{children}</ChakraCheckbox>;
  };
  