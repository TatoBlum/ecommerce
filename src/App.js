import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemList from './componentes/ItemList/itemList';
import Cart from './componentes/Cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/cartContext';

function App() {

  const [unMount, setunMount] = useState(false);

  function onAddHandler(counter) {
    console.log("Cantidad de items comprados: " + counter);
    return counter
  }

  function unMountHandler(unMount) {
    return () => {
      setunMount(!unMount);
      return unMount
    }
  }

  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact render={() => <ItemListContainer
              unMount={unMount}
              onUnMount={unMountHandler(unMount)}
              title='Bienvenido a eShop'
              items={ItemList} />}
            />
            <Route path="/item-detail/:id" exact render={() => <ItemDetailContainer
              items={ItemList}
              stock={5}
              initial={2}
              onAdd={onAddHandler} />}
            />
            <Route path="/cart" render={() => <Cart />} />
            <Route path="/category"></Route>
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
