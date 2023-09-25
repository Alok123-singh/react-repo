import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15);
  
  // let counter = 15;
  
  const addValue = () => {
    if(counter == 20) return;
    console.log("clicked",counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    if(counter == 0) return;
    console.log("clicked",counter);
    // counter = counter - 1;
    setCounter(counter - 1);
  }

  return (
    <>
      <div>
        <h1>Alok Singh Bais</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={addValue}>Add value {counter}</button>
        <br></br>
        <br></br>
        <button onClick={decrementValue}>Decrement value {counter}</button>
        <h2>Footer {counter}</h2>
      </div>
    </>
  )
}

export default App
