import React, { Children, useEffect, useState } from 'react';
import '../Item/items.css';
import { BeatLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/itemDetail';
import './itemDetailContainer.css';
import {useParams} from 'react-router-dom';

async function getItems(list) {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(list)
        }, 1000);
    })
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error(e);
        })
    return data;
}

export default function ItemDetailContainer({ initial, stock, onAdd, items }) {

    const [test, setTest] = useState(false);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        let isMount = true;

        (async () => {
            if (isMount){
                const [getList] = await getItems(items);
                const result = getList.filter(p=> p.id === id )
                setItem(result);

                setLoading(false);
                setTest(true);

                // console.log(id)
            }    
        })()

        return ()=>{
            isMount=false;
        }

    }, [items, id])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTest(true);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [])

    return (
        <>
            {console.log(item)}
            <div className="loading-icon">
                <BeatLoader color="#6668f4" size={12} loading={loading} />
            </div>
            {test && <>
                <ItemDetail
                    itemDetail={item}
                    initial={initial}
                    stock={stock}
                    onAdd={onAdd}
                >
                    {Children}
                </ItemDetail>
            </>}
        </>
    )
}






