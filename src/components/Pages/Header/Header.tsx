import React, {ChangeEvent, useEffect, useState} from 'react';
import {useActions} from "../../../hooks/useActions";
import {useNavigate, Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import "./Header.css"

const Header = () => {
    const products = useTypedSelector(state => state.cart)
    const [category, setCategory] = useState('electronics')
    const {fetchProductByCategory} = useActions()
    const navigate = useNavigate()

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    useEffect(() => {
        navigate('/')
        fetchProductByCategory(category)
    }, [category])

    return (
        <div className="header">
            <Link to="/" className="header__title title">Online store</Link>
            <div className="header__actions action">
                <Link to="/cart" className="header__cart cart">
                    <span className="cart__count">{products.length}</span>
                    <i className="fa fa-shopping-cart"></i>
                </Link>

                <select className="action__select" onChange={onSelect}>
                    <option>electronics</option>
                    <option>jewelery</option>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                </select>
            </div>
        </div>
    );
};

export default Header;