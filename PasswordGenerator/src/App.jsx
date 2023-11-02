import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAlllowed, setCharAllowed]= useState(false)
  let [password, setPassword]= useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // const numbers="0123456789"
    // const spe_symbols="#[!$%&'()*+,-./:;<=>?@[]^_`{|}~]"

    console.log(numberAllowed)
    if(numberAllowed) alphabets += "0123456789"
    if(charAlllowed) alphabets += "#[!$%&'()*+,-./:;<=>?@[]^_`{|}~]"

    for(let i=1;i<=length;i++){
      const charIndex=Math.floor(Math.random()*alphabets.length+1)
      pass += alphabets.charAt(charIndex)
    }
    setPassword(pass)
    console.log(password);
  },[length, numberAllowed, charAlllowed, setPassword])

  const copyPwdToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAlllowed, passwordGenerator])
  // passwordGenerator()

  return (
    <>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500   bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 '
      placeholder='Password'
      readOnly
      ref={passwordRef}></input>
      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPwdToClipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setNumberAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAlllowed}
          id="characterInput"
          onChange={()=>{setCharAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
