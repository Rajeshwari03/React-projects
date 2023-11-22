import React from 'react'
import convert from 'convert-units'

function Selectors({
label,
selectedMeasure="None",
fieldDisable=false,
onValueChange,
selectorType,
quantityOptions
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex outline-none w-full bg-transparent py-1.5`}>
    
    <div className='w-1/2'>
        <label className="text-white mb-2 inline-block">
                  {label}
        </label>
    <select 
    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none "
    value={selectedMeasure}
    onChange={(e)=>onValueChange && onValueChange(e.target.value)}
      disabled={fieldDisable}
      defaultValue={quantityOptions}
>

        <option >None</option>
        
        
        {selectorType=="mainSelector" 
        ?
            convert().measures().map((Measure)=>(
          <option key={Measure} value={Measure}>
            {Measure.toUpperCase()}
        </option>
        ))
        :
        
          convert().list(quantityOptions).map((Measure)=>(
            <option key={Measure.abbr} value={Measure.abbr}>
              {Measure.plural}
          </option>))
        }

</select>

</div>
</div>
  )
}

export default Selectors