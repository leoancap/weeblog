import React from 'react';
import { Circle } from 'react-css-spinners';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Circle
        color="#BCA2E2"
        size={100}
      />
    </Container>
  );
}
