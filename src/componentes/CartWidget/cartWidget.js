import React, { Component } from 'react';

export default class CartWidget extends Component {
        
    render() {
        return (
            <div className={this.props.divClassName}>
                <i className="fas fa-shopping-cart"></i>
            </div>
        )
    }
}
