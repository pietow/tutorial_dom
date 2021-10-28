const ul = document.querySelectorAll('ul')
let nodeList = ul
let htmlListElement = nodeList[0]
let htmlCollection = htmlListElement.children
let LIelement = htmlCollection[0]
// console.log(LIelement.children)
LIelement.childNodes.forEach(e => {
    // console.log(e)
    console.log(e.nodeName)
    console.log(e.nodeType)
    console.log(e.nodeValue)
})
// console.log(htmlCollection.constructor.name)
// console.log(collection.namedItem('first'))

