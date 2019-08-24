import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 2em;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 2em;
    padding: 0.5em;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
    padding: 0.5em;
  }
`;
