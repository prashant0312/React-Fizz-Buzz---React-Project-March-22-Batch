import React, { useState } from "react";
import '../styles/App.css';

import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [getData, setData] = useState(1);

  const onClickIncrementHandler = () => {
    setData(getData + 1);
  };

  const onClickDecrementHandler = () => {
    if (getData > 1) {
      setData(getData - 1);
    }
  };

  return (
    <div id="main">
      <button id="increment" onClick={onClickIncrementHandler}>
        Increment
      </button>

      <div id="counter">
        {getData % 3 === 0 && (
          <div className="fizz">{getData}</div>
        )}

        {getData % 5 === 0 && (
          <div className="buzz">{getData}</div>
        )}

        {getData % 15 === 0 && <div className="fizzbuzz">{getData}</div>}

        { getData % 3 !== 0 && getData % 5 !== 0 && (
          <div className="normal">{getData}</div>
        )}
      </div>

      <button id="decrement" onClick={onClickDecrementHandler}>
        Decrement
      </button>
    </div>
  );
};

export default App;

