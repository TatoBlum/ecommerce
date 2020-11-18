import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';
import CartMessage from '../CartMessage/cartMessage';

function getAmoutItems(cart) {
    let result = 0;

    cart.forEach(e => {
        let totalItemPrice = e.item.price * e.quantity
        result += totalItemPrice
    })

    return result;
}

export default function Cart() {

    const { cart, removeItem, removeAllItems } = useCartContext();
    const [cartTotalPrince, setCartTotalPrince] = useState(0)


    useEffect(() => {
        let res = getAmoutItems(cart);
        setCartTotalPrince(res);
        // console.log(cartTotalPrince)

    }, [cart, cartTotalPrince])

    return (
        <>
            <div 
                className="cart-main-container">
                {
                    cart.map((e, index) => {
                        return (
                            <div className="cart-items contenedor" key={index}>
                                <img className="cart-item-img" src={`/img/${e.item.img}`} alt={e.item.description} />
                                <li className="todo-items cart-item-li"> {e.item.name} {e.item.description} ${e.item.price} x {e.quantity} </li>
                                <button onClick={removeItem(e.item.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
                            </div>

                        )
                    })
                }
                {cartTotalPrince > 0 ?
                    <>
                        <div className="cart-items footer">
                            <Button
                                onClick={removeAllItems()}
                                className="cart-item-remove-all-btn">
                                Borrar todos los items
                            </Button>
                            <h3 className="cart-items footer-h3">
                                Total price: ${cartTotalPrince}
                            </h3>
                        </div>
                    </>
                : <CartMessage />}
            </div>
        </>
    )
}
