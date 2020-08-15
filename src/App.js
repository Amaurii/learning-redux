import React from 'react';
import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';

//Compontente Funcional - Componente de Função
// Conseguiremos utilizar um estado dentro de um componente de função.
function App() {

  return (
    <div className="App">
      <h1>Learning Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
