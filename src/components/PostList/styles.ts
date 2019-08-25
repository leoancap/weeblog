import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40vh;
  grid-gap: 2em;
  @media screen and (max-width: 1024px) {
    padding: 0.5em;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
    padding: 0.5em;
  }
`;
