import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count: Number(this.props.initial)
    //     }
    // };

    state = {
        count: this.props.initial,
        stock: this.props.stock,        
    }

    handleDecrement = () => {
        this.setState( prevState =>({
            // count: prevState.count - 1
            count: Math.max(prevState.count -1, 0),
        }))
        // console.log(this.state.count)
    };
    
    handleIncrement() {
        this.setState( prevState=> ({
            // count: prevState.count + 1 
            count: Math.min(prevState.count +1, this.props.stock),
        }))
        // console.log(this.state.count);
        // console.log(this.state.stock); 
    }

    render() {
        return (
            <>
                <div className="main-container" 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        position:"relative",
                        top:30
                    }}>
                    <h3>Contador</h3>
                    <div className="counter-container">
                        <button 
                            className="cuonter-button"
                            style={{width: "2rem", }}
                            onClick={()=> this.handleDecrement()
                        }>
                            -
                        </button>
                        <div>{this.state.count}</div>
                        <button 
                            className="cuonter-button"
                            style={{width: "2rem", }}
                            onClick={()=> this.handleIncrement()}>
                            +
                        </button>
                    </div>
                <div className="buy-container">
                    <button 
                        onClick={()=> {
                            if (this.state.stock > 0 && this.state.count > 0 && this.state.stock >= this.state.count){
                                this.props.onAdd(this.state.count);
                                this.setState(
                                    {
                                    stock: this.state.stock - this.state.count
                                    }, ()=> {
                                        console.log("Cantidad de stock: "+this.state.stock)
                                    }
                                )
                            } 
                        }}
                        className="add-button">
                            Agregar al carrito
                    </button>
                </div>    
                </div>
            </>
        )
    }
}
