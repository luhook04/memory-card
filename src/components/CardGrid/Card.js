import React from "react";

const Card = ({ pokemon, handleClick }) => {
  return (
    <div className="card-wrapper" onClick={handleClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};
