import React from 'react';
import Pokedex from './Pokedex'
import pokemons from './pokemons'

const dealHand = cards => {
  const hand = [];
  for(let i = 0; i < 4; i++){
    hand.push(cards[Math.floor(Math.random() * cards.length)])
  }
  return hand;
}

const Pokegame = props => {
return (<h1>Pokegame</h1>)
}

export default Pokegame;
