import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () =>  useContext(CartContext);

export default function CartProvider({ defaultCart = [], children}) {
    
    const [cart, setCart] = useState(defaultCart);

    function addItem(object, amount) {
        return ()=>{
            const [obj]  = object
            // console.log(obj.id)
            const getItem = cart.find(item => item.item.id === obj.id);
            let result = { item:obj, quantity:amount }

            if (getItem) {
                return alert(`El item ${obj.name} ya encuentra cargado en el carro`)
            } else {
                setCart([...cart, result]);
            }
        }
    }

    useEffect(() => {
        console.log(cart);

    }, [cart ,setCart])

    function removeItem(id) {
        return ()=>{
            setCart(cart.filter( e=> e.item.id !== id))      
        }
    }

    const removeAllItems = () =>{
        setCart([]);    
    }

    // function removeAllItems() {
    //     return ()=>{
    //         setCart([]);
    //     }
    // }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, removeAllItems }}>
            {children}
        </CartContext.Provider>
    )
}
