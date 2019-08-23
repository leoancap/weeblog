import React from "react";

import { Container } from "./styles";

interface ILayout {
  children: JSX.Element;
}

export default ({ children }: ILayout) => {
  return <Container>{children}</Container>;
};
