import React from 'react';

const Pokecard = (props) => {
  const {id,name,type,base_experience} = props;
  return (
    <div>
      <h1>{name}</h1>

      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

Pokecard.defaultProps = {
  id: 25, name: 'Pikachu', type: 'electric', base_experience: 112
}

export default Pokecard;
