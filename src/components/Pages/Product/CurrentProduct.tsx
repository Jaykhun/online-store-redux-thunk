import "./Product.css"
import React from 'react';
import {useDispatch} from "react-redux";
import {CurrentProductProps} from "../../../types/Product/productStateTypes";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {addToCart, decreaseProduct, increaseProduct, removeFromCart} from "../../../store/actions/cartActions";

const CurrentProduct: React.FC<CurrentProductProps> = ({product}) => {
    const dispatch = useDispatch()
    const {id, price, image, description, title} = product
    const products = useTypedSelector(state => state.cart)
    const productExist: any = products.find(product => product.id === id)

    const addProduct = () => {
        if (!productExist) {
            const newProduct = {...product, count: 1}
            dispatch(addToCart(newProduct))
        } else alert('The product already added')
    }

    const onIncrease = () => {
        dispatch(increaseProduct(id))
    }

    const onDecrease = () => {
        if (productExist?.count > 1) {
            dispatch(decreaseProduct(id))
        } else {
            dispatch(removeFromCart(id))
        }
    }

    return (
        <div className="product">
            <div className="product__image">
                <img src={image} alt={title}/>
            </div>

            <div className="product__content">
                <p>Title: <span>{title}</span></p>
                <p>Price: <span>{price} &#36;</span></p>
                <p>Description: {description}</p>
                <div className="product__content-buttons content-buttons">
                    <button className="product__content-btn" onClick={addProduct}>
                        {productExist ? 'Go to Cart' : 'Add to Cart'}
                    </button>

                    {productExist
                        && <>
                            <div className="content-buttons__action">
                                <button className="content-buttons__increase" onClick={onIncrease}>+</button>
                                <span>{productExist.count}</span>
                                <button className="content-buttons__decrease" onClick={onDecrease}>-</button>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default CurrentProduct