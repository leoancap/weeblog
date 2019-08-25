import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr 1fr 1fr;
  position: relative;
  padding: 0.7em;
  overflow: hidden;
  border-radius: 3px;
  border-radius: 0.7em;
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Title = styled(Link)`
  text-decoration:none;
  color: black;
  font-weight: bolder;
  cursor: pointer;
  width: 70%;
  text-overflow: ellipsis;
`;


export const BriefDescription = styled.p`
  margin: 1em 0;
  padding: 0.3em 0;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ReadMore = styled(Link)`
  color: rgb(87, 62, 222);
  transition: all 0.3s ease-in-out 0s;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: 0.5em;
`;

export const RemoveIconStyled = styled.img`
  position: absolute;
  top: 0.7em;
  right: 0.5em;
  cursor:pointer;
  height: 1em;
  width: 1em;
`;
