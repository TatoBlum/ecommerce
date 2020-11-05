import React from 'react';
import { Link } from 'react-router-dom';

export default function BuyWidget({ divClassName, itemCount }) {
    return (
        <div className={divClassName} style={{
            position: "absolute",
            bottom: -120, justifyContent: "center", marginRight: 0
        }}>
            <Link to="/cart">
                <i className="fas fa-shopping-cart" style={{ width: 220, textAlign: "center" }}>
                Terminar mi compra. Items seleccionados:{itemCount}
                </i>
            </Link>
        </div>

    )
}
