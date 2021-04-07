import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {  
    const product = useSelector((state) => state.selectedProduct)
    const dispatch = useDispatch();
    const {productId} = useParams();
    console.log(product);  // displays the particular id details on the console


    const fetchProductDetails = () => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => {
                const details = response.data;
                dispatch(selectedProducts(details))
            })
            .catch((error) => {
                console.log("Error:", error)
            })
    };

    useEffect(() => {
        if(productId && productId !== " ") fetchProductDetails()
    }, [productId]);

    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    )
}

export default ProductDetails
