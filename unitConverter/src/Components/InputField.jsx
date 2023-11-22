import React from 'react'

function InputField({
 
  fieldDisable,
  number,
  onNumberChange
}) {
 

  return (
    <div>
             &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input
                  type="text"
                  placeholder=""
                  readOnly={fieldDisable}
                  value={number}
                  onChange={(e)=>onNumberChange && onNumberChange(Number(e.target.value))}
              /> 
          
              
                  
                  
    </div>
        
  )
}

export default InputField