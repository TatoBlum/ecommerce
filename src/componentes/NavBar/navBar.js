import React, { useState } from 'react';
import './navBar.css';
import MenuItems from './menu-items';
import CartWidget from '../CartWidget/cartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';



export default function NavBar() {

    const { cart } = useCartContext();

    const [clicked, setClicked] = useState(false);

    function hanldlerClick() {
        setClicked(!clicked);
        return clicked;
    }

    const [ , category ] = MenuItems;

    return (
        <>
            {/* {console.log(cart.length)} */}
            <nav className="nav-bar">
                <div className="conteiner-title">
                    <h1 className="main-title">eShop</h1>
                </div>
                <div className="contenedor-ul-li">
                    <ul className={clicked ? 'menu-items active' : 'menu-items'}>
                        {
                            MenuItems.map((item, index) => {
                                if (item.subCat.length > 0) return (
                                    <DropdownButton className="drop-down" key={index} id="dropdown-basic-button" title={item.title}>
                                        {category.subCat.map((item, index) => {
                                            return (
                                                <Dropdown.Item as={Link} className="drop-down-items" key={index} to={`/category/${item.name}`}>{item.name}</Dropdown.Item>
                                            )
                                        })
                                        }
                                    </DropdownButton>
                                )
                                return (
                                    <Link to={item.url} className={item.cName} style={{ textDecoration: "none", color: "white" }} key={index}>
                                        <li key={index}>{item.title}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div
                        className="menu-icon"
                        onClick={hanldlerClick}
                    >
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {cart.length > 0 ? <CartWidget divClassName="cart-icon list-items" /> : null}
                </div>
            </nav>
        </>
    )
}


// export default class NavBar extends Component {


//     state = {
//         clicked: false,
//     };

//     hanldlerClick = () => {
//         // this.setState({ clicked: !this.state.clicked }) 
//         this.setState(prevState => ({
//             clicked: !prevState.clicked
//         }));
//     };

//     render() {

//         return (
//             <>
//                 <nav className="nav-bar">
//                     <div className="conteiner-title">
//                         <h1>eShop</h1>
//                     </div>
//                     <div className="contenedor-ul-li">
//                         <ul className={this.state.clicked ? 'menu-items active' : 'menu-items'}>
//                             {
//                                 MenuItems.map((item, index) => {
//                                     return (
//                                         <Link to={item.url} className={item.cName} style={{ textDecoration: "none", color: "white" }} key={index}>
//                                             <li key={index}>{item.title}</li>
//                                         </Link>
//                                     )
//                                 })
//                             }
//                         </ul>
//                         <div
//                             className="menu-icon"
//                             onClick={this.hanldlerClick}
//                         >
//                             <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
//                         </div>
//                         <CartWidget divClassName="cart-icon list-items" />
//                     </div>
//                 </nav>
//             </>
//         )
//     }
// }
