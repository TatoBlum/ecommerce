import React, { Component } from 'react';

export default class Parrafo extends Component {
    render() {
        return (
            <p>
                {this.props.texto}
            </p>
        )
    }
}
