import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer 
        title='Bienvenido a eCommerce' 
      />
      
    </>
  );
}

export default App;
