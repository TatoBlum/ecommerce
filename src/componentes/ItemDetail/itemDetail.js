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

    useEffect(() => {
        (async () => {
            const result = await getItem(itemDetail);
            setItemDetail(result);
            //console.log(Item)
        })()
    }, [itemDetail])


    return (
        <>
            { Item.map((item, index) => {
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
                        />
                        <BuyWidget
                            divClassName="buy-icon"
                        />
                    </div>
                )
            })
            }

        </>
    )

}





