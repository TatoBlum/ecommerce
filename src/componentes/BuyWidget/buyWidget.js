import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Toast } from 'react-bootstrap';
import '../BuyWidget/buywidget.css';

export default function BuyWidget({ divClassName, itemCount, item, addItem }) {

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    return (
        <>
            {!showA && <Toast onClose={toggleShowA}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Items seleccionados: {itemCount}</strong>
                </Toast.Header>
                <Toast.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div className="mb-2">
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                            <Button 
                                onClick={addItem(item, itemCount)}
                                style={{
                                background: "#6668f4", borderColor: "#6668f4"
                            }}
                            >
                                <i className="fas fa-shopping-cart" style={{ width: 220, textAlign: "center" }}>
                                    Ir a carro</i>
                            </Button>{' '}
                        </Link>
                    </div>
                    <strong style={{ color: "#6668f4" }}>Terminar tu compra haciendo click</strong>
                </Toast.Body>
            </Toast>}
        </>
    )
}
