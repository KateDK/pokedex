import React from 'react';
import Pokecard from './Pokecard';
import pokemons from './pokemons'

const Pokedex = () =>{
  console.log(pokemons);
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokecard/>
    </div>
  )
}

export default Pokedex;
