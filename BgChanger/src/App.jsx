import { useState } from 'react'


function App() {
  const [colour, setColour] = useState("olive")
  // console.log(colour);
  return (
    
    
    
     <div className="w-full h-screen duration-200" style={{backgroundColor:colour}}>
     <div className='fixed flex-wrap justify-center shadow-lg px-3 py-2 bottom-2 inset-x-0'>
       <div className="fixed flex-wrap justify-center left-36 bg-white shadow-lg px-3 py-2 rounded-xl bottom-2">
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"red"}} onClick={()=>setColour("red")}>Red</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"blue"}} onClick={()=>setColour("blue")}>Blue</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"yellow"}} onClick={()=>setColour("yellow")}>Yellow</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"purple"}} onClick={()=>setColour("purple")}>Purple</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"black"}} onClick={()=>setColour("black")}>Black</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"green"}} onClick={()=>setColour("green")}>Green</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"pink"}} onClick={()=>setColour("pink")}>Pink</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"orange"}} onClick={()=>setColour("orange")}>Orange</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"grey"}} onClick={()=>setColour("grey")}>Grey</button> 
       <button className="outline-non px-3 py-2 rounded-xl text-white " style={{backgroundColor:"olive"}} onClick={()=>setColour("olive")}>Olive</button> 
       </div>
     </div> 
     </div>
    
  )
}

export default App
