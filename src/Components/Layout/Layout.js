import React from "react";
import Header from "../Header/Header";
import { HomeWrapper, LeftBar, MainContent, RightBar } from "./Home.styles";

function Layout({ left, main, right }) {
  return (
    <HomeWrapper>
      <LeftBar>{left}</LeftBar>
      <MainContent>{main}</MainContent>
      <RightBar>{right}</RightBar>
    </HomeWrapper>
  );
}
export default Layout;
