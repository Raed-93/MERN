import React, { useState } from 'react';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const showPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        console.log(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <button type='submit' onClick={showPokemon}>Fetch the Pokemon</button>
      {pokemons.map((pokemon, i) => 
         <p key={i}>{pokemon.name}</p>
      )}
    </>
  );
}

export default Pokemons;
