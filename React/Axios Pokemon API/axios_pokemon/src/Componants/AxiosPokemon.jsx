import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const showPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
          setPokemons(response.data.results);
          console.log(response.data.results);
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

export default AxiosPokemon