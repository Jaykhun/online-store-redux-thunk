import React from 'react';
import CartItem from "./CartItem";
import key from "react-key-string";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import "./Cart.css"

const Cart = () => {
    const products = useTypedSelector(state => state.cart)


    return (
        <div className="cart">
            <h1 className="title">Cart</h1>
            <div className="cart__body">
                {products.length > 0
                    ? products.map(product => <CartItem product={product} key={key.generate()}/>)
                    : <p className="message">There are no products</p>
                }
            </div>
        </div>
    );
};

export default Cart;