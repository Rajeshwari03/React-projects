import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactElement={
//     type:'a',
//     props:{
//         href : 'https://www.google.com',
//         target:'_blank'
//     },
//     children:'Click Me'
// }
let myName='Rajeshwari'
let anotherElement=(
    <a href='https://google.com' target='_blank'>Click Me</a>
)

let ReactElement=React.createElement('img',
{'src':'http://localhost:5173/src/IMG20230925201557.jpg',
'alt':'Alternative',
'width' : '800px',
 'height' : '550px'}
// myName
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <ReactElement/> // This will not work as ReactElement has custom attributes, not proper syntax
    //  anotherElement
     ReactElement
    // <App/>
  
)
