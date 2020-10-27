import React, { useEffect, useState } from 'react';
import './items.css';

async function getItems(el) {
    // try {
    //     const data = await new Promise( (res,rej)=>{
    //         setTimeout(() => {
    //             res (el)
    //         }, 2000);
    //     });
    //     return data;
    // } 
    // catch (error) {
    //     console.log(error);
    // }

    
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
            //console.log(items);
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




/* <li key={index}><a className={item.description} href={item.img}>{item.description}</a></li> */

// `<div class="itemflex-tendencias">
// <div>
//     <img src="${gifUrl}" class="gifImg gif-tendencias gif-img-tendencias" alt="${gifAlt}" id="gifs">
//     <h2 class="gradiente-tendencias-gifs">${filtroDePalabras}</h2>
// </div> 
// </div>`