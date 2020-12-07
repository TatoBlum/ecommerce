import React, { useState } from 'react';
import './counter.css';

export default function Counter({ stock, initial, onAdd, itemName, unMountHandler, onItemCount, onSetStock }) {

    const [count, setCount] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const handleIncrement = () => {
        if (itemStock > count) {
            setCount(count + 1);
        }
    }

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const onClickHandler = () => {
        if (itemStock > 0 && count > 0 && itemStock >= count) {
            onAdd(count);
            setItemStock(itemStock - count);
            onItemCount(count);
            onSetStock(itemStock);
            unMountHandler();
        }
    }

    return (
        <>
            <div className="main-container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                }}>
                <h3 style={{ fontSize: "1rem" }}>{itemName}</h3>
                <div className="counter-container">
                    <button
                        className="cuonter-button"
                        style={{ width: "2rem", }}
                        onClick={handleDecrement}>
                        -
                        </button>
                    <div>{count}</div>
                    <button
                        className="cuonter-button"
                        style={{ width: "2rem", }}
                        onClick={handleIncrement}>
                        +
                        </button>
                </div>
                <div className="buy-container">
                    <button
                        onClick={onClickHandler}
                        className="add-button">
                        Agregar al carro
                    </button>
                </div>
            </div>
        </>
    )
}

