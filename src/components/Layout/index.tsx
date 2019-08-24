// Global
import React from "react";
// Local
import { Container } from "./styles";

interface ILayout {
  children: JSX.Element;
}

export default ({ children }: ILayout) => {
  return <Container>{children}</Container>;
};
