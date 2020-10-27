import React, { Component } from 'react';
import ItemList from '../ItemList/itemList';
import Item from '../Item/item';
import './itemListContainer.css';



export default class ItemListContainer extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            itemList: ItemList,
        }
    }
    

    render() {
        console.log(ItemList)
        return (
            <>
            <div style={{
                display:"flex",
                position: "relative",
                justifyContent: "center",
                alignContent: "center",
                top: 20,
            }}>
                <h1 style={{height: 65}}>{this.props.title}</h1>
            </div>
            <div className="contenedor-de-items"> 
                <Item items={this.state.itemList} />
            </div>
            </>
        )
    }
}

