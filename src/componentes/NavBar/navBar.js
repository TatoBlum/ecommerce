import React, { Component } from 'react';
import './navBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="nav-bar">
                    <div className="conteiner-title">
                        <h1>eCommerce</h1>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <li key="1"><a className="list-items" href="#Item1">Item1</a></li>
                            <li key="2"><a className="list-items" href="#Item2">Item2</a></li>
                            <li key="3"><a className="list-items" href="#Item3">Item3</a></li>
                            <li key="4"><a className="list-items" href="#Item4">Item4</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
