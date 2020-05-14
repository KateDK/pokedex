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
  const hand1 = dealHand(pokemons)
  const hand2 = dealHand(pokemons)
return (
  <div>
    <Pokedex pokemons={hand1}/>
    <Pokedex pokemons={hand2}/>
  </div>
  );
}

export default Pokegame;
