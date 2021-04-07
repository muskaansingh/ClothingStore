import React from 'react';
import {useSelector} from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const {id, title, price} = products[0]
    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src="https://image.shutterstock.com/image-vector/new-collection-summer-handwritten-text-260nw-372574357.jpg"/>
                    </div>
                    <div className="content">
                        {/* <div className="header">{title}</div>
                        <div className="header">{price}</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
