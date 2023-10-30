import { useState } from 'react'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15)
  const addValue=()=>{
    if(counter<20)
     setCounter(counter+1)
  }
   const removeValue=()=>{
    if(counter>0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>ADD to {counter}</button> &nbsp;&nbsp;&nbsp;
      <button onClick={removeValue}>REMOVE from {counter}</button>
    </>
  )
}

export default App
