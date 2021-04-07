import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import ProductComponent from "./ProductComponent";
import axios from 'axios';


const ProductListing = () => {
  const products = useSelector((state) => state);


  const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                console.log(products);
            })
            .catch(error => {
                console.log("error",error)
            })
    }


useEffect(()=>{
  fetchProducts()
}, []);

  // console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
  }

export default ProductListing;
