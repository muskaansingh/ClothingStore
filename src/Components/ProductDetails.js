import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeselectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {  
    const product = useSelector((state) => state.selectedProduct)
    const {image, description, title, price, category} = product;
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
        return() => {
            dispatch(removeselectedProducts());
        }
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...LOADING!</div>
            ): (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">$ {price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add To Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            };
        </div>
    )
}

export default ProductDetails
