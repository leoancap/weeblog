import React from 'react';

import { Container, Label } from './styles';

interface IButton {
  to: string
  label: string
}

export function Button({ to, label }:IButton) {
  return (
    <Container
      to={to}
    >
      <Label>
        {label}
      </Label>
    </Container>
  );
}

export default Button;
