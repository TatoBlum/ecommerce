import React, { useEffect, useState } from 'react';
// import ItemList from '../ItemList/itemList';
import Item from '../Item/item';
import './itemListContainer.css';
import { BeatLoader } from 'react-spinners';


export default function ItemListContainer({ title, onUnMount, unMount, items }) {

    // const [itemList, setItemList] = useState([ItemList]);
    const [state, setstate] = useState([items])

    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState(false);


    useEffect(() => {

        (async () => {
            setTimeout(() => {
                // setItemList(ItemList);
                // console.log(itemList);

                setstate(items);
                console.log(state)

                setLoading(false);
            }, 3000);


        })()

    }, [ state, items])

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
            {   test ? <>
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
                    <Item
                        onUnMount={onUnMount}
                        items={state} />
                </div>
            </> : null}
        </>
    )
}


