import React, { useEffect, useState } from 'react';
import Counter from '../Counter/counter';
import './itemDetail.css';
import BuyWidget from '../BuyWidget/buyWidget'
import { useCartContext } from '../../context/cartContext';


export default function ItemDetail({ initial, stock, onAdd, itemDetail }) {

    const [Item, setItemDetail] = useState([]);
    const [unMount, setunMount] = useState(false);

    const [itemCount, setitemCount] = useState(initial)
    const [stockState, setStock] = useState(stock);

    const { addItem } = useCartContext();

    useEffect(() => {
        setItemDetail(itemDetail);
    }, [itemDetail, Item])

    const { name, description, img } = Item;

    const unMountHandler = () => {
        setunMount(true);
        return unMount
    }

    function onItemCount(params) {
        setitemCount(params);
        return itemCount
    }

    function onSetStock(params) {
        setStock(params);
        return stockState
    }

    return (
        <>
            {!unMount && <div className="item-detail-container">
                <div className="itemDetail-flex" style={{ width: 250 }}>
                    <img src={`/img/${img}`} className="product-Img" alt={description} />
                    <div className="itemDetail-img" style={{ height: "auto" }}>
                    </div>
                </div>
                <Counter
                    style={{ top: 0 }}
                    stock={stock}
                    initial={initial}
                    onAdd={onAdd}
                    itemName={name}
                    unMountHandler={unMountHandler}
                    onItemCount={onItemCount}
                    onSetStock={onSetStock}
                />
            </div>}
            {unMount ?
                <div className="buy-widget-container">
                    <BuyWidget
                        divClassName="buy-icon"
                        itemCount={itemCount}
                        item={Item}
                        addItem={addItem}
                    ></BuyWidget>
                </div>
            : null}
        </>
    )

}





