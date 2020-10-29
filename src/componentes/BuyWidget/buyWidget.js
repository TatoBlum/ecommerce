import React from 'react';

export default function BuyWidget({divClassName}) {
    return (
        <div className={divClassName} style={{position: "absolute",
        bottom: -120, justifyContent: "center", marginRight:0 }}>
            <i className="far fa-credit-card" style={{width: 220, textAlign: "center"}}><a style={{textDecoration:"none", color:"#fff"}} href="#BuyButtom">Comprar</a></i>
        </div>
    )
}
