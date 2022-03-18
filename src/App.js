import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ clickedPokemon, setClickedPokemon ] = useState([]);
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(0);
  const maxPokemon = 12;

  const fetchPokemon = async (amount) => {
    const pokemonArray = [];

    for (let i = 11; i <= amount + 11; i++) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokeUrl);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemonArray.push({ id, name, image });
    }
    return pokemonArray;
  };

  const playRound = () => {};

  const handleClick = () => {};

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [ array[currentIndex], array[randomIndex] ] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  };
};

export default App;
