import React from 'react';
import { Link } from 'react-router-dom';

export default function BuyWidget({ divClassName }) {
    return (
        <div className={divClassName} style={{
            position: "absolute",
            bottom: -120, justifyContent: "center", marginRight: 0
        }}>
            <Link to="/carro-de-compras">
                <i className="fas fa-shopping-cart" style={{ width: 220, textAlign: "center" }}>
                Ir al carro
                </i>
            </Link>
        </div>

    )
}
