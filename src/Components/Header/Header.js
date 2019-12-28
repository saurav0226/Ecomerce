import React from "react";
import {
  HeaderWrapper,
  LeftContent,
  Logo,
  MiddleContainer,
  RightContent
} from "./Header.styles";
import Search from "../Search/Search";

function Header({
  left,
  isSearch = true,
  searchLeft,
  searchRight,
  right,
  children
}) {
  return (
    <>
      <HeaderWrapper>
        {left && <LeftContent>{left}</LeftContent>}
        <Logo>Appnmae</Logo>
        <MiddleContainer>
          {searchLeft}
          {isSearch && <Search />}
          {searchRight}
        </MiddleContainer>
        <RightContent>{right}</RightContent>
      </HeaderWrapper>
      {children}
    </>
  );
}
export default Header;
