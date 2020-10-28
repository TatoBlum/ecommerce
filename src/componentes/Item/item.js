import React, { useEffect, useState } from 'react';
import './items.css';


async function getItems(el) {    
    const data = await new Promise( (res,rej)=>{
        setTimeout(() => {
            res (el)
        }, 2000);
    })
    .then(res=>{
        return res
    })
    .catch(e=>{
        console.error(e)
    })
    return data;    
}


export default function Item({items}) {

    const [itemList, setItemList] = useState([]);
                
    useEffect(() => {               
        (async () => {
            const [result] = await getItems(items);
            setItemList(result);
            console.log(itemList);
        })();
    })
    
    return (
        <>
            {
                itemList.map( (item,index)=>{
                    return (
                        <div className="itemflex" key={index}>
                            <div>
                                <img src={item.img} className="product-Img" alt={item.description}/>
                                <h3 className="product-title">{item.description} Stock: {item.stock}</h3>
                            </div>
                        </div>
                )})              
            }
        </>
    )
}



