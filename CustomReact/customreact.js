function CustomReact(reactElement, container){
    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        if(prop ==='children') continue  //if props has any 'children' Attribute
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}
const mainContainer=document.querySelector('#root')
let firstReactElement={
    type:'a',
    props:{
        href : 'https://www.google.com',
        target:'_blank'
    },
    children:'Click Me'
}
CustomReact(firstReactElement, mainContainer)