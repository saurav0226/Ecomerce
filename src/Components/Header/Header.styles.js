import styled from "styled-components";
import { APP_MAIN_COLOR, APP_COLOR } from "../../Constants/Colors";
import { FONT_30 } from "../../Constants/AppConfig";
export const HeaderWrapper = styled.section`
  background-color: ${APP_MAIN_COLOR};
  color: ${APP_COLOR};
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  font-size: ${FONT_30};
  text-shadow: 1px 1px 5px black;
`;
export const LeftContent = styled.div``;
export const RightContent = styled.div``;
export const MiddleContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
