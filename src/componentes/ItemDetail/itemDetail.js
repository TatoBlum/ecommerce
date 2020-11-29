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
            // console.log("Item");
            // console.log(Item);
    }, [itemDetail, Item])

    const unMountHandler = () => {
        setunMount(true);
        return unMount    
    }

    // function unMountHandler(unMount) {
    //     setunMount(true);
    //     return unMount        
    // }

    function onItemCount(params) {
        setitemCount(params);
        console.log('itemCount: ' + params)
        return itemCount    
    }

    function onSetStock(params) {
        setStock(params);
        console.log('setStock: ' + params)
        return stockState
    }

    useEffect(() => {
        // console.log(itemCount);
        // console.log(stockState);
    }, [itemCount, stockState])

    return (
        <>
            {!unMount ? Item.map((item, index) => {
                return (
                    <div className="item-detail-container" key={index}>
                        <div className="itemDetail-flex" style={{ width: 250 }} key={index}>
                            <img src={`/img/${item.img}`} className="product-Img" alt={item.description} />
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
                        item={Item}
                        addItem={addItem}
                    ></BuyWidget>
                </div>
                : null}
        </>
    )

}





