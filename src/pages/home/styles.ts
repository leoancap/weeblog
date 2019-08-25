import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 2em;
  margin: 0 auto;
  max-width: 98%;
  width: 60em;
`;

export const LeftPanel = styled.div`
  display: grid;
  align-content: flex-start;
`