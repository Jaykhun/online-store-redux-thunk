import React from 'react';
import "./Products.css"
import {Link} from "react-router-dom";
import {ProductItemProps} from "../../types/Product/productStateTypes";

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    const {id, title, price, image} = product

    return (
        <Link to={String(id)} className="products__item item-products">
            <div className="item-products__image">
                <img src={image} alt={title}/>
            </div>

            <div className="item-products__title">{title}</div>
            <div className="item-products__price">Price: <span className="price">{price} &#36;</span></div>
        </Link>
    );
};

export default ProductItem;