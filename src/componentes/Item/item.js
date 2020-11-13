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
                            <Card className="card">
                                <Card.Body className="card-body">
                                    <Card.Title className="card-body-items">
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className="card-body-items">
                                        Description: {item.description}
                                    </Card.Text>
                                    <Card.Text>Precio: ${item.price}</Card.Text>
                                </Card.Body>
                            </Card>
                            <div className="item-detail-btn-container">
                                <Link to={`/item-detail/${item.id}`}>
                                    <Button
                                        variant="primary"
                                        onClick={unMount}
                                        className="product-btn-and-title item-prod-btn">Detalle de Item
                                    </Button>
                                </Link>
                            </div>
                        </div>
                )})
            }
        </>
    )
}

