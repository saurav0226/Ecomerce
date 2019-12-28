import styled from "styled-components";
import { FONT_16 } from "../../Constants/AppConfig";
export const SearchWrapper = styled.div`
  display: flex;
  width: 60%;
`;
export const SearchBar = styled.input`
  padding: 8px;
  flex-grow: 1;
  font-size: ${FONT_16};
  border-radius: 4px;
  box-shadow: 1px 1px 5px black;
  border: 0;
`;
