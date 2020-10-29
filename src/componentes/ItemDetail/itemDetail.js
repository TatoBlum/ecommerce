import React, { useEffect, useState } from 'react';
import Counter from '../Counter/counter';
import './itemDetail.css';
import BuyWidget from '../BuyWidget/buyWidget'

export default function ItemDetail({ initial, stock, onAdd, itemDetail }) {

    const [Item, setItemDetail] = useState(itemDetail);

    useEffect(() => {
        (async () => {
            setItemDetail(itemDetail);
            // console.log(Item);
        })();
    }, [itemDetail, Item])

    return (
        <>
            <div className="item-detail-container">
                <div className="itemDetail-flex" style={{ width: 250 }} key={Item.id}>
                    <div className="itemDetail-img" style={{ height: "auto" }}>
                        <img src={Item.img} className="product-Img" alt={Item.description} />
                    </div>
                </div>
                <Counter
                    style={{ top: 0 }}
                    stock={stock}
                    initial={initial}
                    onAdd={onAdd}
                />
                <BuyWidget
                    divClassName="buy-icon"
                />
            </div>
        </>
    )
}

/* <BuyWidget
divClassName="buy-icon list-items"
/> */


/* <div className="buy-item" style={{ position: "absolute" }}>
<li><a className="list-items far fa-credit-card" href="#BuyButtom">Comprar</a></li>
</div>
</div> */