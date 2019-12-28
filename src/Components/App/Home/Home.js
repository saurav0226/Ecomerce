import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import ProductList from "../ProductList/ProductList";
const Home = () => {
  return <Layout main={<ProductList />} />;
};

export default Home;
