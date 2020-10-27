import React, { useEffect, useState } from 'react';


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
                        <li key={index}><a className={item.description} href={item.img}>{item.description}</a></li>
                )})              
            }
        </>
    )
}


