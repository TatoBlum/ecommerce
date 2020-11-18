import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


export default function Item({ docs }) {

    const documentsFireStore = docs;

    return (
        <>
            {
                documentsFireStore.map((item, index) => {
                    return (
                        <div className="itemflex" key={index}>
                            <div className="item-img-container" key={index}>
                                <img 
                                    src={`/img/${item.img}`}    
                                    className="product-Img" alt={item.description} />
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

