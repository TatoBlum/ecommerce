import React, { Component } from 'react';

export default class Parrafo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             holis: "holis State"
        }
    }
    

    render() {
        return (
            <div>
                <p>
                    {this.props.texto}<br />
                    {this.state.holis}
                </p>
                <h1>Holis</h1>
            </div>
        )
    }
}



