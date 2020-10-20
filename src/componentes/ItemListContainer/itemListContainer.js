import React, { Component } from 'react';

export default class ItemListContainer extends Component {
    render() {
        return (
            <div style={{
                display:"flex",
                position: "relative",
                justifyContent: "center",
                alignContent: "center",
                top: 20,
            }}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

