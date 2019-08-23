import styled from "styled-components";

interface IIsScrolled {
  isScrolled: boolean;
}

export const NavStyled = styled.header<IIsScrolled>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  z-index: 2;
  transition: all 0.3s;
  background: rgb(246, 247, 248);
  display: flex;
  align-items: center;
  padding: 0 1em;
  ${props =>
    props.isScrolled &&
    `
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    `};
`;

export const Logo = styled.span`
  font-size: 1em;
  font-weight: bolder;
`;
