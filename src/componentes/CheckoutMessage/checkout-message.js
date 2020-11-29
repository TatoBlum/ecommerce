import React, { useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'

export default function CheckoutMessage() {
    
    const { docId, setCart } = useCartContext();

    useEffect(() => {
        setCart([]);
    }, [docId, setCart])

    return (
        <div>
            <p>{docId}</p>
        </div>
    )
}
