import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './componentes/Cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/cartContext';
import CategoryContainer from './componentes/CategoriesContainer/categoriesContainer';

function App() {

  function onAddHandler (counter) {
    return counter
  }

  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact render={() => <ItemListContainer
              title='Bienvenido a eShop' />}
            />
            <Route path="/item-detail/:id" exact render={() => <ItemDetailContainer
              stock={5}
              initial={2}
              onAdd={onAddHandler} />}
            />
            <Route path="/cart" render={() => <Cart />} />
            <Route path="/category/:categoryId" exact render={() => <CategoryContainer />} />
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
