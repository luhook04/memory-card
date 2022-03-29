import React from "react";

const Winner = ({ currentScore }) => {
  return (
    <div>
      {currentScore === 12 ? (
        <div>
          <h1>Congratulations you caught 'em all!</h1>
          <button>New Game</button>
        </div>
      ) : null}
    </div>
  );
};

export default Winner;
