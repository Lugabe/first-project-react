import React from "react";
import { Button as FirstButton } from "./style";

const Button = ({children, ...props}) => {
  return <FirstButton {...props}>{children}</FirstButton>;
};

export default Button;
