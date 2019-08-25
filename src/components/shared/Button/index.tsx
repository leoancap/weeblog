import React from "react";

import { Container, Label, SubmitButton, LinkButton } from "./styles";

interface IButton {
  background?: string;
  color?: string;
  label: string;
  to?: string;
}

export function Button({
  background = "#a68fea",
  color = "#F6F7F8",
  label,
  to,
}: IButton) {
  return (
    <Container>
      {to ? (
        <LinkButton background={background} color={color} to={to}>
          <Label>{label}</Label>
        </LinkButton>
      ) : (
        <SubmitButton background={background}color={color} type="submit">
          {label}
        </SubmitButton>
      )}
    </Container>
  );
}

export default Button;
