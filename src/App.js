import React, { useState, useEffect } from "react";
import Grid from "./components/CardGrid/Grid";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ clickedPokemon, setClickedPokemon ] = useState([]);
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(0);

  const maxPokemon = 12;

  useEffect(() => {
    const loadPokemon = async () => {
      setPokemon(shuffleArray(await fetchPokemon(maxPokemon)));
    };

    loadPokemon();
  }, []);

  const fetchPokemon = async (amount) => {
    const pokemonArray = [];
    const randNumArray = [];

    for (let i = 1; i < 200; i++) {
      randNumArray.push(i);
    }

    shuffleArray(randNumArray);

    for (let i = 1; i <= amount; i++) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${randNumArray[
        i
      ]}`;
      const response = await fetch(pokeUrl);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemonArray.push({ id, name, image });
    }
    return pokemonArray;
  };

  const playRound = (pokemonName) => {
    if (clickedPokemon.includes(pokemonName)) {
      setClickedPokemon([]);
      setCurrentScore(0);
    }
    else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      setClickedPokemon((prevState) => [ ...prevState, pokemonName ]);
    }
  };

  const getNewPokemon = () => {};

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [ array[currentIndex], array[randomIndex] ] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  };

  const handleClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent;
    playRound(pokemonName);
    setPokemon(shuffleArray(pokemon));
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Grid pokemon={pokemon} handleClick={handleClick} />
    </div>
  );
};

export default App;
