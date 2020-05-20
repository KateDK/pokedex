import React from 'react';
import './Pokecard.css';

const padding = (n) => {
  let num = n + 1000;
  num = (num+="").split('');
  num.shift();
  return num.join('');
}

const pokApi = (id) =>{
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padding(id)}.png`
}


const Pokecard = (props) => {
  const {id,name,type,base_experience} = props;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard_name">{name}</h1>
      <img alt={name} src={pokApi(id)}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

Pokecard.defaultProps = {
  id: 25, name: 'Pikachu', type: 'electric', base_experience: 112
}

export default Pokecard;
