import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';
import Counter from './componentes/Counter/counter';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer 
        title='Bienvenido a eCommerce' 
      />
      <Counter />
    </>
  );
}

export default App;
