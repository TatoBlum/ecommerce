import React from 'react';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css'

export default function Cart() {

    const { cart, removeItem } = useCartContext();

    return (
        <> {
            cart.map((e, index) => {
                return (
                    <div className="todo" key={index}>
                        <li className="todo-items" style={{ textDecoration: "none", listStyleType: "none" }}> {e.item.name} {e.item.description} </li>
                        <button onClick={removeItem(e.item.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
                    </div>
                )
            })
        }
        </>
    )
}
