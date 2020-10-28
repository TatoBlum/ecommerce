import React, { Children, useEffect, useState } from 'react';
import '../Item/items.css';
import { BeatLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/itemDetail';
import ItemList from '../ItemList/itemList';
import './itemDetailContainer.css';

async function getItem(el) {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(el)
        }, 3000);
    })
        .then(res => {
            return res[0];
        })
        .catch(e => {
            console.error(e);
        })
    return data;
}

export default function ItemDetailContainer({initial, stock ,onAdd}) {

    const [test, setTest] = useState(false);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const items = ItemList;

    useEffect(() => {
        (async () => {
            const [result] = await getItem(items);
            setLoading(false);
            setItem(result);
        })();
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setTest(true);
        }, 3000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <div className="loading-icon">
                <BeatLoader color="#6668f4" size={12} loading={loading} />
            </div>       
            {test ? <>
                <ItemDetail
                    itemDetail={item}
                    initial={initial}
                    stock={stock}
                    onAdd={onAdd}
                    >
                    {Children}
                </ItemDetail> 
            </> : null}
        </>
    )
}






