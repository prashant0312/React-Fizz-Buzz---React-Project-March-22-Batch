import React,{useState} from 'react'
import '../styles/App.css';

const App = () => {
  const[count,setCount] = useState(1)
  const logic =()=>{
  if(count%3===0 && count%5===0){
    return "fizzbuzz"
  }
  else if(count%3===0){
    return "fizz"
  }
  else if(count%5===0){
    return "buzz"
  }
  else{
    return "normal"
  }
  };
    return (
      <div id="main">
        <button id="increment" onClick={()=>setCount(count+1)}>increment</button>
        <div id = "counter" className={logic()} >{count}</div>
        <button id="decrement" onClick={()=>setCount(count-1)}>decrement</button>
      </div>
    )
    }
  export default App;