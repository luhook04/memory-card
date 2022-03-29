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
    const fetchPokemon = async (amount) => {
      const pokemonArray = [];
      const randNumArray = [];

      for (let i = 1; i < 500; i++) {
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
        const name = pokemon.name.toUpperCase();
        const image = pokemon.sprites.front_default;
        pokemonArray.push({ id, name, image });
      }
      return pokemonArray;
    };

    const loadPokemon = async () => {
      setPokemon(shuffleArray(await fetchPokemon(maxPokemon)));
    };

    loadPokemon();
  }, []);

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
      console.log(clickedPokemon);
    }
  };

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
    console.dir(e.target.parentNode);
    console.log(pokemonName);
  };

  return (
    <div className="main-wrapper">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {currentScore !== 12 ? (
        <div className="winner-modal">
          <h1>Congratulations! You caught 'em all!</h1>
          <h3>Click a pokemon to play again</h3>
        </div>
      ) : null}
      <Grid pokemon={pokemon} handleClick={handleClick} />
    </div>
  );
};

export default App;
