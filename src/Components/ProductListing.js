import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions";


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                dispatch(setProducts(products));
            })
            .catch(error => {
                console.log("error",error)
            })
    }


useEffect(()=>{
  fetchProducts()
}, []);

  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
  }

export default ProductListing;
