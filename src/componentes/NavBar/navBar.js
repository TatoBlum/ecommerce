import React, { Component } from 'react';
import './navBar.css';
import MenuItems from './menu-items';
import CartWidget from '../CartWidget/cartWidget';


export default class NavBar extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false,
        }

    }
    
    hanldlerClick = () => {
        this.setState({ clicked: !this.state.clicked }) 
    }

    render() {
        return (
            <>
                <nav className="nav-bar">
                    <div className="conteiner-title">
                        <h1>eCommerce</h1>
                    </div>
                    <div className="contenedor-ul-li">
                        <ul className={this.state.clicked ? 'menu-items active' : 'menu-items'}>
                            {
                                MenuItems.map( (item, index) =>{
                                    return (
                                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                                    )
                                })   
                            }
                        </ul>
                        <div 
                            className="menu-icon"
                            onClick={this.hanldlerClick} 
                        >
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                        <CartWidget divClassName="cart-icon list-items" />
                    </div>
                </nav>
            </>
        )
    }
}
