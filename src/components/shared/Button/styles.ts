import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  background: #a68fea;
  cursor: pointer;
  padding: 0.5em;
  max-height: 2.5em;
  margin: 0 auto;
  border-radius: 0.3em;
  color: white;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span``;
