import React from 'react';
import {useSelector} from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const RenderList = products.map((product) => {
        const {id, title, price, category,image} = product
        return(
            <div className="four wide column" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <>
            {RenderList}
        </>  
    );
}

export default ProductComponent
