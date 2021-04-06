import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="ui grid container">
      <h1>ProductListing</h1>
    </div>
  );
};

export default ProductListing;
