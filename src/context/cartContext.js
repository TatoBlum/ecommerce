import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () =>  useContext(CartContext);

export default function CartProvider({ defaultCart = [], children}) {
    
    const [cart, setCart] = useState(defaultCart);

    const [docId, setDocId] = useState();

    function addItem(object, amount) {
        return ()=>{
            const getItem = cart.find(item => item.item.id === object.id);
            let result = { item:object, quantity:amount }

            if (getItem) {
                return alert(`El item ${object.name} ya encuentra cargado en el carro`)
            } else {
                setCart([...cart, result]);
            }
        }
    }

    const removeItem = (id) => {
        return ()=>{
            setCart(cart.filter( e=> e.item.id !== id));      
        }
    }

    const removeAllItems = () =>{
        setCart([]);    
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, removeAllItems, setDocId, docId }}>
            {children}
        </CartContext.Provider>
    )
}
