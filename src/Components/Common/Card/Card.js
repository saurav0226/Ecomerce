import React from "react";
import {
  CardContainer,
  ImageContainer,
  NoImage,
  InfoContainer,
  ProductHead,
  PriceInfo
} from "./Card.styles";

const Card = ({ product }) => {
  const { image, title, price } = product;
  return (
    <CardContainer>
      {product.image ? (
        <ImageContainer src={image} alt={product.id} />
      ) : (
        <NoImage />
      )}
      <InfoContainer id="info">
        <ProductHead>{title}</ProductHead>
        <PriceInfo>Price: {price}</PriceInfo>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
