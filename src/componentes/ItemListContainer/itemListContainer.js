import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';
import Item from '../Item/item';
import './itemListContainer.css';

export default function ItemListContainer({title}) {
    
    const [itemList, setItemList] = useState([ItemList]);

    useEffect(() => {

        (async ()=>{
                setItemList(ItemList);
                console.log(itemList)
        })()  

    }, [itemList])

    return (
        <>
            <div style={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignContent: "center",
                top: 20,
            }}>
                <h1 style={{ height: 65 }}>{title}</h1>
            </div>
            <div className="contenedor-de-items">
                <Item items={itemList} />
            </div>
        </>
    )
}


