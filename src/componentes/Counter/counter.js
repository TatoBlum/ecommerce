import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {

    state = {
        count: this.props.initial,
        stock: this.props.stock,
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            count: Math.max(prevState.count - 1, 0),
        }))
    };

    handleIncrement() {
        this.setState(prevState => ({
            count: Math.min(prevState.count + 1, this.props.stock),
        }))
    }

    render() {
        return (
            <>
                <div className="main-container"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                    }}>
                    <h3>Contador</h3>
                    <div className="counter-container">
                        <button
                            className="cuonter-button"
                            style={{ width: "2rem", }}
                            onClick={() => this.handleDecrement()
                            }>
                            -
                        </button>
                        <div>{this.state.count}</div>
                        <button
                            className="cuonter-button"
                            style={{ width: "2rem", }}
                            onClick={() => this.handleIncrement()}>
                            +
                        </button>
                    </div>
                    <div className="buy-container">
                            <button
                                onClick={() => {
                                    if (this.state.stock > 0 && this.state.count > 0 && this.state.stock >= this.state.count) {
                                        this.props.onAdd(this.state.count);
                                        this.setState(
                                            {
                                                stock: this.state.stock - this.state.count
                                            }, () => {
                                                console.log("Cantidad de stock: " + this.state.stock)
                                                this.props.onItemCount(this.state.count);
                                                this.props.onSetStock(this.state.stock);
                                                this.props.unMountHandler();
                                            }
                                        )
                                    }
                                }}
                                className="add-button">
                                Agregar al carro
                            </button>
                    </div>
                </div>
            </>
        )
    }
}
