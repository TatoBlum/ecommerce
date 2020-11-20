import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
import '../Cart/cart.css';
import CartMessage from '../CartMessage/cartMessage';
import * as firebase from 'firebase/app';
import { getFirestore } from '../../firebase/firebase';
import 'firebase/firestore';
import CartForm from '../CartForm/cartForm';

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
    const [cartTotalPrince, setCartTotalPrince] = useState(0);

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    useEffect(() => {
        let res = getAmoutItems(cart);
        setCartTotalPrince(res);
        //console.log(cartTotalPrince)

    }, [cart, cartTotalPrince])

    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        reEmail: "",
        telefono: "",
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(datos);
        createOrder();
    }
    
    const createOrder = async () => {
        const  newOrder = {
            buyer: datos, 
            items: cart.map( e =>  e), 
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotalPrince,
        }

        const db = getFirestore();

        const orders = db.collection("orders");
    
    try{
        const doc = await orders.add(newOrder);
        console.log('Order created with id: ', doc.id);
    } catch (err) {
        console.log(err);
    }   

    }


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
                                onClick={removeAllItems} //sin ()
                                className="cart-item-remove-all-btn">
                                Borrar todos los items
                            </Button>
                            <h3 className="cart-items footer-h3">
                                Total price: ${cartTotalPrince}
                            </h3>
                        </div>
                    {!showA && <Button 
                            onClick={toggleShowA}
                            variant="outline-success"
                            style={{    
                                alignSelf: "flex-end",
                                marginRight: "50px"
                            }}>
                            Checkout
                        </Button> }

                        {showA && <CartForm 
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            toggleShowA={toggleShowA}                            
                        />}
                    </>
                : <CartMessage />}
            </div>
        </>
    )
}
