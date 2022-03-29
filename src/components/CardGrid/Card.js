import React from "react";

const Card = ({ pokemon, handleClick }) => {
  return (
    <div className="card-wrapper" onClick={handleClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="name-wrapper">
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  );
};

export default Card;
