import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 40em;
  max-width: 95%;
  margin: 0 auto;
`;

export const PostTitle = styled.h3`
  text-align: center;
`;

export const PostContent = styled.p`
  background: rgba(80, 20, 80, 0.04);
  padding: 1em;
  border-radius: 1em;
  margin-top: 3em;
  height: 100%;
  /* width: 100%; */
`;
