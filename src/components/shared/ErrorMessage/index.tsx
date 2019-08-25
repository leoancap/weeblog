import React from 'react';

import { Container, ErrorMessageStyled } from './styles';

export function ErrorMessage() {
  return (
    <Container>
      <ErrorMessageStyled>
        There was an error.
        <br />
        <br />
        Try again!
      </ErrorMessageStyled>
    </Container>
  );
}

export default ErrorMessage;
