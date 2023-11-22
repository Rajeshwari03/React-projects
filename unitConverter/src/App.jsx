import { useState } from 'react'
import convert from 'convert-units'
import Selectors from './Components/Selectors';
import InputField from './Components/InputField';


function App() {
  

  const [measure, setMeasure] = useState('')
  const [quantity1, setQuantity1]= useState('')
  const [quantity2, setQuantity2]= useState('')
  const [input1, setInput1]= useState(0)
  const [input2, setInput2]= useState(0)

  const convertUnit=()=>{
    setInput2(convert(input1)
          .from(quantity1)
          .to(quantity2))
  }
 
 
  // console.log(convert().measures());
  // console.log(convert().measures().map(ele => ele[0].toUpperCase() + ele.slice(1)));
  return (
   <>
   <Selectors label="Measurement"
   selectedMeasure={measure}
   onValueChange={(measure)=>setMeasure(measure)}
   selectorType='mainSelector'
   quantityOptions={measure}/><br/>
   
   { measure=="None" || measure==""
   
   ?
   <></>
   :
   <div className='flex flex-col items-center'>
    
    <Selectors label="Quantity1"
     selectedMeasure={quantity1}
     onValueChange={(quantity1)=>setQuantity1(quantity1)}
     selectorType='subSelector'
     quantityOptions={measure}/><br/>
     
     <Selectors label="Quantity2"
     selectedMeasure={quantity2}
     onValueChange={(quantity2)=>setQuantity2(quantity2)}
     selectorType='subSelector'
     quantityOptions={measure}/><br/>
     </div>
   
   
    

   }
 
   { (quantity1=="None" || quantity1=="") && (quantity2=="None" || quantity2=="")
   
   ?
   <></>
   :
   
   <div className='flex flex-col items-center'>
    <InputField label=""
     fieldDisable={false}
     onNumberChange={(input1)=>setInput1(input1)}
     number={input1}
     /><br/>
     <InputField label=""
     fieldDisable={true}
     number={input2}
     />
     </div>
   
   
   
    

   }
   <br/>
   
   &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button onClick={(e) => {
                      e.preventDefault();
                      convertUnit()
                  }} >Convert</button>
  
   </>

     
   
  )
}

export default App
