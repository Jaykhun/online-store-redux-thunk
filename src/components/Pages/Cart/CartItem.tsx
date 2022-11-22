import React from 'react';
import "./Cart.css"
import {IProduct} from "../../../types/Product/productStateTypes";
import {addToCart, decreaseProduct, increaseProduct, removeFromCart} from "../../../store/actions/cartActions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

export interface CartItemProps {
    product: IProduct
}

const CartItem: React.FC<CartItemProps> = ({product}) => {
    const dispatch = useDispatch();
    const {id, image, title, price, count, description} = product
    const products = useTypedSelector(state => state.cart)
    const productExist: any = products.find(product => product.id === id)

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
        <div className="cart__item">

            <div className="cart__content">
                <div className="cart__image">
                    <img src={image} alt={title}/>
                </div>

                <div className="cart__text">
                    <p className="text-name">{title}</p>
                    <p>{description}</p>
                </div>
            </div>

            <div className="cart-buttons">
                <p>Price:<span className="price">{price} &#36;</span></p>
                <div className="buttons">
                    <button className="cart-buttons__increase" onClick={onIncrease}>+</button>
                    <span className="count">{count}</span>
                    <button className="cart-buttons__decrease" onClick={onDecrease}>-</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;