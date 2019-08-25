import React from 'react';

import { Container, ErrorMessageStyled } from './styles';

export default function ErrorMessage() {
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
