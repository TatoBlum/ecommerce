import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import '../CartWidget/cartWidget.css';

const getAmoutItems = (cart) => {
    let result = 0;

    cart.forEach(e => {
        let items = e.quantity;
        result += items;
    })

    return result;
}


export default function CartWidget() {

    const { cart } = useCartContext();
    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        let res = getAmoutItems(cart);
        setCartCounter(res);

    }, [cart])

    return (
        <>
            <div className="cart-widget-container">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart">{cartCounter}</i>
                </Link>
            </div>
        </>
    )
}
