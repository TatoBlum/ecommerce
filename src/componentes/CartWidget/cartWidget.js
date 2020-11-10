import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';


export default function CartWidget({ divClassName }) {

    const { cart } = useCartContext();

    return (
        <>
        {console.log(cart.length)}
            <div className={divClassName}>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"> {cart.length}</i>
                </Link>
            </div>
        </>
    )
}
