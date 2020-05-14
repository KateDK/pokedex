import React from 'react';
import './App.css';
import Pokedex from './Pokedex'
import pokemons from './pokemons'
import Pokegame from './Pokegame'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokegame />
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
