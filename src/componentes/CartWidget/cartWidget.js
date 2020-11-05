import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CartWidget extends Component {
        
    render() {
        return (
            <div className={this.props.divClassName}>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            </div>
        )
    }
}
