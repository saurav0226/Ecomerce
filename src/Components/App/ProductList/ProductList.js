import React, { useState, useEffect } from "react";
import apis from "../../../Api";
import Card from "../../Common/Card/Card";
import { ListContainer } from "../../Common/Card/Card.styles";
function ProductList() {
  const [productsList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProductList = async () => {
    setIsLoading(true);
    let products = await apis.ProductsApi.getProducts();
    setProductList(products);
    setIsLoading(false);
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <ListContainer>
      {isLoading
        ? "Loading"
        : productsList.map(productItem => <Card product={productItem} />)}
    </ListContainer>
  );
}

export default ProductList;
