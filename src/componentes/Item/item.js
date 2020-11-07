import React, { useEffect, useState } from 'react';
import './items.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

async function getItems(el) {
    const data = await new Promise((res, rej) => {
        // setTimeout(() => {
        res(el)
        // }, 2000);
    })
        .then(res => {
            return res
        })
        .catch(e => {
            console.error(e)
        })
    return data;
}

export default function Item({ items, unMount }) {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        let clean = true;

        (async () => {
            if (clean) {
                const [result] = await getItems(items);
                setItemList(result);
                //console.log(itemList);
            }

        })();

        return () => {
            clean = false;
        }

    }, [itemList, items])


    return (
        <>
            {
                itemList.map((item, index) => {
                    return (
                        <div className="itemflex" key={index}>
                            <div className="item-img-container" key={index}>
                                <img src={item.img} className="product-Img" alt={item.description} />
                            </div>
                            <Card style={{border: 0, height: 100}}>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text style={{height: 30}}>
                                    Description: {item.description}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className="item-detail-btn-container">
                                <Link to={`/item-detail/${item.id}`}>
                                    <Button
                                        // className="item-list-btn"
                                        variant="primary"
                                        onClick={unMount}
                                        className="product-btn-and-title">Detalle de Item
                                    </Button>
                                </Link>
                            </div>
                        </div> 
                    )
                })
            }
        </>
    )
}



                        // <div className="itemflex" key={index}>
                        //     <div className="item-img-container" key={index}>
                        //         <img src={item.img} className="product-Img" alt={item.description} />
                        //         <h3 className="product-title">{item.name} {item.description}</h3>
                        //     </div>
                        //     <div className="item-detail-btn-container">
                        //         <Link to={`/item-detail/${item.id}`}>
                        //             <button
                        //                 onClick={unMount}
                        //                 className="product-title">Detalle de Item
                        //             </button>
                        //         </Link>
                        //     </div>
                        // </div> 