import React from 'react';

const Pokecard = (props) => {
  const {id,name,type,base_experience} = props;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard_name">{name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

Pokecard.defaultProps = {
  id: 25, name: 'Pikachu', type: 'electric', base_experience: 112
}

export default Pokecard;
