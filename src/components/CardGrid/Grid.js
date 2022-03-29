import React from "react";
import Card from "./Card";

const Grid = ({ pokemon, handleClick }) => {
  const pokemonCards = pokemon.map((poke) => (
    <Card key={poke.id} pokemon={poke} handleClick={handleClick} />
  ));

  return <div>{pokemonCards}</div>;
};

export default Grid;
