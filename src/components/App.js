import React, { useState } from "react";
import '../styles/App.css';

const App = () => {

  const [getData, setData] = useState(1);

  const onClickIncrementHandler = () =>{
    setData(getData + 1);
  }

  const onClickDecrementHandler = () =>{
    setData(getData - 1);
  }
  
  return (
    <div id="main">

      <div id = "increment" onClick = {onClickIncrementHandler}>Increment</div>


      <div id="counter">

        {getData % 3 === 0 && getData % 15 !== 0 && (<div className = "fizz">{getData}</div>)}

        {getData % 5 === 0 && getData % 15 !== 0 && (<div className = "buzz">{getData}</div>)}

        {getData % 15 === 0 && (<div className = "fizzbuzz">{getData}</div>)}

        {getData % 3 !== 0 && getData % 5 !== 0 && getData % 15 !== 0 &&  (<div className = "normal">{getData}</div>)}

      </div>

      <div id = "decrement" onClick = {onClickDecrementHandler}>Decrement</div>

    </div>
  )
}


export default App;
