// Global
import React from "react";
// Local
import { useIsScrolled } from "../../customHooks/useIsScrolled";
import { Logo, NavStyled } from "./styles";

export default () => {
  const isScrolled = useIsScrolled();
  return (
    <NavStyled isScrolled={isScrolled}>
      <Logo>WeeBlog</Logo>
    </NavStyled>
  );
};
