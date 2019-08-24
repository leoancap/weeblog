import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 0.5em;
  margin: 0 auto;
  max-width: 98%;
  width: 50em;
`;

export const ErrorMessage = styled.h3`
  margin: 3em auto;
  text-align: center;
  padding: 1em 3em;

  box-shadow: rgba(90, 0, 0, 0.1) 2px 2px 10px 10px;
`;
