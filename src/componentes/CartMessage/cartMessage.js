import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function CartMessage() {

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    return (
        <>
            <div style={{
                position: "relative",
                display: "flex",
                width: "100vw",
                height: "130px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "35px",
            }}>
                <Toast onClose={toggleShowA}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">El carro se encuentra vacio</strong>
                    </Toast.Header>
                    <Toast.Body style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div className="mb-2">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button
                                    // onClick={addItem(item, itemCount)}
                                    style={{
                                        background: "#6668f4", borderColor: "#6668f4"
                                    }}
                                >
                                    <i className="fas fa-shopping-cart" style={{ width: 220, textAlign: "center" }}>
                                        Click para comenzar tu compra
                                </i>
                                </Button>{' '}
                            </Link>
                        </div>
                        <strong style={{ color: "#6668f4" }}>Ir Home para comenzar</strong>
                    </Toast.Body>
                </Toast>
            </div>
        </>
    )
}
