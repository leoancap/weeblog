import styled from 'styled-components';
import { ICentered } from '../../../styled/styles';

export const Container = styled.div<ICentered>`
  display: flex;
  align-items: center;
  ${({ centered }) => centered && `
    margin: 0 auto;
  `}
`;

export const FullDate = styled.span`
  padding-right: 0.3em;
  color: grey;
`;

export const MonthsAgo = styled.span`
  font-size: 14px;
  color: gray;
`;
