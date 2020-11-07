import React, { useEffect, useState } from 'react';
import Counter from '../Counter/counter';
import './itemDetail.css';
import BuyWidget from '../BuyWidget/buyWidget'

async function getItem(el) {
    const data = await new Promise((res, rej) => {
        res(el)
    })
        .then(res => {
            return res
        })
        .catch(e => {
            console.error(e)
        })
    return data;
}

export default function ItemDetail({ initial, stock, onAdd, itemDetail }) {

    const [Item, setItemDetail] = useState([]);
    const [unMount, setunMount] = useState(false);

    const [itemCount, setitemCount] = useState(initial)
    const [stockState, setStock] = useState(stock);

    useEffect(() => {
        (async () => {
            const result = await getItem(itemDetail);
            setItemDetail(result);
            //console.log(Item)
        })()
    }, [itemDetail])


    function unMountHandler(unMount) {
        setunMount(true);
        return unMount
    }

    function onItemCount(params) {
        setitemCount(params);
        console.log('itemCount: ' + params)
        return params
    }

    function onSetStock(params) {
        setStock(params);
        console.log('setStock: ' + params)
        return params
    }

    useEffect(() => {
        console.log(itemCount);
        console.log(stockState);
    }, [itemCount, stockState])

    return (
        <>
            {!unMount ? Item.map((item, index) => {
                return (
                    <div className="item-detail-container" key={index}>
                        <div className="itemDetail-flex" style={{ width: 250 }} key={index}>
                            <img src={item.img} className="product-Img" alt={item.description} />
                            <div className="itemDetail-img" style={{ height: "auto" }}>
                            </div>
                        </div>
                        <Counter
                            style={{ top: 0 }}
                            stock={stock}
                            initial={initial}
                            onAdd={onAdd}
                            itemName={item.name}
                            unMountHandler={unMountHandler}
                            onItemCount={onItemCount}
                            onSetStock={onSetStock}
                        />
                    </div>
                )
            }) : null}
            {unMount ?
                <div className="buy-widget-container">
                    <BuyWidget
                        divClassName="buy-icon"
                        itemCount={itemCount}
                    ></BuyWidget>
                </div>
                : null}
        </>
    )

}





