import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5em;
  overflow: hidden;
  border-radius: 3px;
  cursor: pointer;
  max-width: 96%;
  margin: 1em auto;
  border-radius: 0.7em;
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
`;

export const Title = styled.h4`
  padding: 0.3em 0;
`;

export const DateWrapper = styled.div`
  margin-top: 1em;
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

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled.span`
  margin-left: 0.5em;
  &:first-of-type {
    margin-left: 0;
  }
`;
