//selecting elements/tags/nodes from the dom
const header = document.querySelector('header')
header.style.border = '1px solid red'
const para = document.createElement('p')
para.innerText = 'BLA'
const liEl = document.querySelector('li')
// console.log(liEl)
const liElAll = document.querySelectorAll('li')
// console.log(liEl)
// console.log(Object.values(liElAll))
// Array.from(liElAll).map(x => {
//     console.log(x)
// })
arr = []
arr.push('bla')
let copyNode = liEl.cloneNode(true)
header.append(copyNode)


//even elements of the ul list? 
let evenEls = document.querySelectorAll('li:nth-child(even)')
// console.log(evenEls)

evenEls.forEach(x => x.style.backgroundColor = 'red')


//traversal
// console.log(liEl.parentNode)
// console.log(header.children)
// console.log(header.childNodes)
// console.log(header.children[0].nodeType) //nodeType = 1 ---> ElementNode
// console.log(header.childNodes[0].nodeType) // nodetype = 3 ----> TextNode
// console.log(header.childElementCount)
// console.log(header.firstElementChild)
// console.log(header.firstChild)
// console.log(header.nextElementSibling)
// console.log(header.nextSibling)
console.log(liEl.closest('header'))

const body = document.querySelector('body')
// traverse(header)
//traverse function
function traverse(e) {
    // console.log(e)
    for (let child of e.children){
        console.log(child)
        traverse(child)
    }
}
