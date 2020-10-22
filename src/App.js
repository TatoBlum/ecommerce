import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/itemListContainer';
import Counter from './componentes/Counter/counter';

function App() {

  function onAddHandler(counter) {   
      console.log("Cantidad de items comprados: "+counter);  
      return counter   
  }

  return (
    <>
      <NavBar />
      <ItemListContainer 
        title='Bienvenido a eCommerce' 
      />
      <Counter 
        stock={5}
        initial={2} 
        onAdd={onAddHandler}
      />
    </>
  );
}

export default App;
