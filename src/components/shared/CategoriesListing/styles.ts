import styled from 'styled-components';

import { ICentered } from '#styledTypes';

export const Container = styled.div<ICentered>`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-content: flex-end;
  ${({ centered }) => centered && `
    margin: 0.5em auto;
  `}
`;

export const Category = styled.span`
  margin-left: 0.5em;
  &:first-of-type {
    margin-left: 0;
  }
`;
