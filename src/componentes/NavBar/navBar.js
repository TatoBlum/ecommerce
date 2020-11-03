import React, { Component } from 'react';
import './navBar.css';
import MenuItems from './menu-items';
import CartWidget from '../CartWidget/cartWidget';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //          clicked: false,
    //     }
    // }
    state = {
        clicked: false,
    };
    
    hanldlerClick = () => {
        // this.setState({ clicked: !this.state.clicked }) 
        this.setState(prevState=> ({
                clicked: !prevState.clicked
        }));
    };

    render() {
    
        return (
            <>
                <nav className="nav-bar">
                    <div className="conteiner-title">
                        <h1>eShop</h1>
                    </div>
                    <div className="contenedor-ul-li">
                        <ul className={this.state.clicked ? 'menu-items active' : 'menu-items'}>
                            {
                                MenuItems.map( (item, index) =>{
                                    return (
                                        <Link to={item.url} className={item.cName} key={index}>
                                            <li key={index}>{item.title}</li>
                                        </Link>
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
