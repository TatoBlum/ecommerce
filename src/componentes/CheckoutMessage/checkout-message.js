import React, { useEffect } from 'react'
import { useCartContext } from '../../context/cartContext';
import { Alert } from 'react-bootstrap';
import '../CheckoutMessage/checkout-message.css'


export default function CheckoutMessage() {

    const { docId, setCart } = useCartContext();

    useEffect(() => {
        setCart([]);
    }, [docId, setCart])

    return (
        <>
            <div className="alert-container">
                <Alert variant="success">
                    <Alert.Heading>Su compra ha sido realizado con exito</Alert.Heading>
                    <p>
                        Felicidades!! su id de compora es {docId}
                    </p>
                    <hr />
                </Alert>
            </div>
        </>
    )
}
