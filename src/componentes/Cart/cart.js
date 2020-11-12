import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';
import CartMessage from '../CartMessage/cartMessage';
// import { CartMessage } from '../CartMessage/cartMessage';


function getAmoutItems(cart) {
    let result = 0;

    cart.forEach(e => {
        let totalItemPrice = e.item.prince * e.quantity
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
        <> {
            cart.map((e, index) => {
                return (

                    <div className="todo" key={index}>
                        <li className="todo-items" style={{ textDecoration: "none", listStyleType: "none" }}> {e.item.name} {e.item.description} ${e.item.prince} x {e.quantity} </li>
                        <button onClick={removeItem(e.item.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
                    </div>

                )
            })
        }
            {cartTotalPrince > 0 ?
             <> 
                <h3 className="todo" style={{ color: "grey" }}>
                    Total price: ${cartTotalPrince} 
                </h3>
                <div className="todo">
                    <Button
                        onClick={removeAllItems()}
                        style={{
                            background: "#6668f4", borderColor: "#6668f4",
                        }}
                    >
                        Borrar todos los items
                    </Button>
                </div>
            </>
            : <CartMessage />}
        </>
    )
}
