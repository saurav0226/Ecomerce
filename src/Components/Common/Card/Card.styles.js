import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  padding: 10px;
  width: 250px;
  flex-grow: 1;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border: 1px solid gray;
  &:hover {
    box-shadow: 0 0 3px grey;
  }

  overflow: hidden;
  &:hover #info {
    bottom: 0px;
    left: 0;
    right: 0;
  }
`;
export const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const NoImage = styled.div``;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;
  padding: 10px;
`;
export const ProductHead = styled.div``;
export const PriceInfo = styled.div`
  font-weight: 900;
`;
