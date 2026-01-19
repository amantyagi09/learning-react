function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement['type'])
    domElement.innerHTML = reactElement['children']
    domElement.setAttribute('href', reactElement['props']['href'])
    domElement.setAttribute('target', reactElement['props']['target'])

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)

   domElement.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
        if(prop == 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}
// this is how rendering is done.

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}                // this is how a react sees your code that is being returned from a function. but as we are writing our custom react so we will pass like this.

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)