import React from "react";

import { useIsScrolled } from "../../customHooks/useIsScrolled";
import { Logo, NavStyled } from "./styles";

export default () => {
  const isScrolled = useIsScrolled();
  return (
    <NavStyled isScrolled={isScrolled}>
      <Logo>Wee Bloggy</Logo>
    </NavStyled>
  );
};
