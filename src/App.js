import React from 'react';
import './App.css';
import Imagen from './componentes/imagen';
import Parrafo from './componentes/parrafo';
import Link from './componentes/link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Imagen />
        <Parrafo texto="Edit src/App.js and save to reload." />
        <Link />
      </header>
    </div>
  );
}

export default App;
