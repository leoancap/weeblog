import styled from 'styled-components';

export const Container = styled.div`
`;

export const CategoryHeading = styled.h3`
  border-bottom: 1px solid lightgray;
  margin: 1em 1em 0em 0em;
  padding: 0 0.5em 0.2em;
  text-align: center;
`;

export const CategoriesListing = styled.ul`
  list-style-type: none;
`;

interface ICategoryStyled {
  isSelected: boolean;
}
export const CategoryStyled = styled.li<ICategoryStyled>`
  padding: 0.5em 0.2em;
  margin: 0.3em 0.3em;
  border-radius: 0.3em;
  display: flex;
  cursor: pointer;
  &:hover {
    background: rgba(150, 150, 150, 0.1);
  }
  ${({ isSelected }) => isSelected
    && `
    background: rgba(150, 150, 150, 0.5);
    &:hover {
      background: rgba(150, 150, 150, 0.5);
    }

  `}
`;

export const XIcon = styled.span`
  margin-left: auto;
  margin-right: 0.3em;
`