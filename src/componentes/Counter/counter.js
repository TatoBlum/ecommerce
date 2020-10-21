import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    };

    handleDecrement = () => {
        this.setState( prevState =>({
            // count: prevState.count - 1
            count: Math.max(prevState.count -1,0)
        }))
        console.log(this.state.count)
    };
    
    handleIncrement() {
        // this.state.count = this.state.count +1
        // console.log(this.state.count); 

        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {console.log(this.state.count)})
        // console.log(this.state.count);

        this.setState( prevState=> ({
            // count: prevState.count + 1
            count: Math.min(prevState.count +1,20)
        }))
        console.log(this.state.count);
    }

    render() {
        return (
            <>
                <div className="main-container" style={{
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
                            onClick={()=> this.handleDecrement()}>
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
                    <button className="add-button">Agregar al carrito</button>
                </div>    
                </div>
            </>
        )
    }
}
