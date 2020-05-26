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

const calcHand = hand => {
  let strength = 0;
  for(let i = 0; i < hand.length; i++){
    strength+= hand[i].base_experience
  }
  return strength;
}

const isWinner = (hand1,hand2) =>{
  return calcHand(hand1) >= calcHand(hand2);
}

const Pokegame = props => {
  const hand1 = dealHand(pokemons)
  const hand2 = dealHand(pokemons)
  const winner = "This Hand Wins!";
  const looser = "Looser Hand";
return (
  <div className='Pokegame'>
    <div className='Pokegame_hand'>
      <Pokedex pokemons={hand1} />
      {isWinner(hand1,hand2) ? <h2 className="Pokegame_winner">{winner}</h2> : <h2 className="Pokegame_looser">{looser}</h2>}
    </div>
    <div className='Pokegame_hand'>
      {isWinner(hand2,hand1) ? <h2 className="Pokegame_winner">{winner}</h2> : <h2 className="Pokegame_looser">{looser}</h2>}
      <Pokedex pokemons={hand2} />
    </div>
  </div>
  );
}

export default Pokegame;
