import { useState } from 'react'
import './App.css'
import Card1 from './components/card1'

function App() {
  const [count, setCount] = useState(0)
  let  myObj={
    name: 'Rajeshwari',
    age:23
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card1 course='React' btnText='Leran more'/>
      <Card1 course='JavaScript' btnText='Leran more'/>
    </>
  )
}

export default App
