import React from 'react';

const Pokecard = (props) => {
  console.log(">>>", props);
  return (
    <div>Pokecard</div>
  )
}

Pokecard.defaultProps = {
  id: 25, name: 'Pikachu', type: 'electric', base_experience: 112
}

export default Pokecard;
