import React, { useContext, useEffect, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () =>  useContext(CartContext);

export default function CartProvider({ defaultCart = [], children}) {
    
    const [cart, setCart] = useState(defaultCart);

    function addItem(object, amount) {
        return ()=>{

            const getItem = cart.find(item => item.id === object[0].id);
            
            let result = { item:object[0], quantity:amount }

            if (getItem) {
                return console.log('El item', object[0].name ,'ya encuentra cargado en el carro')
            } else {
                setCart([...cart, result]);
            }
        }
    }

    useEffect(() => {
        console.log(cart);
        console.log(cart.length);
    }, [cart ,setCart])


    function removeItem(id) {
        return ()=>{
            
            setCart(cart.filter( e=> e.item.id !== id))
             
        }
    }

    function removeAllItems() {
        return ()=>{
            setCart([]);
        }
    }

    return (
        <CartContext.Provider value={ {cart, addItem, removeItem, removeAllItems } }>
            {children}
        </CartContext.Provider>
    )
}
