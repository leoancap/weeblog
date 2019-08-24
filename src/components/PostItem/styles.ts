import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
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

export const Title = styled.h4`
  cursor: pointer;
  width: 70%;
  text-overflow: ellipsis;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DatePosted = styled.span`
  padding-right: 0.3em;
  color: grey;
`;

export const DatePostedAgo = styled.span`
  font-size: 14px;
  color: gray;
`;

export const BriefDescription = styled.p`
  margin-top: 1em;
  padding: 0.3em 0;
  white-space: pre-wrap;
`;

export const ReadMore = styled(Link)`
  color: rgb(87, 62, 222);
  transition: all 0.3s ease-in-out 0s;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: 0.5em;
`;

export const Categories = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
`;

export const Category = styled.span`
  margin-left: 0.5em;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const RemoveIconStyled = styled.img`
  position: absolute;
  top: 0.7em;
  right: 0.5em;
  cursor:pointer;
  height: 1em;
  width: 1em;
`;
