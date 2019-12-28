import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
`;
export const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  background: #f3f3f3;
  padding: 10px;
  margin: 0 10px;
`;
export const LeftBar = styled.div`
  display: flex;
  flex-basis: 20%;
  max-width: 300px;
  min-width: 200px;
  background: #f3f3f3;
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 10px;
`;
export const RightBar = styled.div``;
