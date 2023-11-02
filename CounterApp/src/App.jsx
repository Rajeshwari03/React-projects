import { useState } from 'react'
import './App.css'

function App() {
   let [counter, setCounter] = useState(15)
  const addValue=()=>{
    if(counter<20)
     setCounter(prevCounter =>prevCounter+1)//writing counter+1 4 times will not work as react works in batches and it will consider same counter and same operation is getting performed so, need to use it as arrow function
     setCounter(prevCounter =>prevCounter+1)
     setCounter(prevCounter =>prevCounter+1)
     setCounter(prevCounter =>prevCounter+1)
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
