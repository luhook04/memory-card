import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div>
      <h1>Pokemon Memory Game</h1>
      <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
