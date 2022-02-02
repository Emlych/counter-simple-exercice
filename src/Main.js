import React from "react";
import { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const handleReset = () => {
    setCounter(0);
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="main">
      <div className="compteur">
        {counter === 0 ? (
          <button className="invisible">-</button>
        ) : (
          <button onClick={handleMinus}>-</button>
        )}
        <div className="compteur--value violet">{counter}</div>
        {counter === 10 ? (
          <button className="invisible">+</button>
        ) : (
          <button onClick={handlePlus}>+</button>
        )}
      </div>
      <div className="reset">
        <button className="violet" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Main;
