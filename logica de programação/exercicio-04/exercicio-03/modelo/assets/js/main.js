const paragrafos = document.querySelector('.paragrafos')
const paragrafo = paragrafos.querySelectorAll('p')

const h1 = document.body.querySelector('h1')

h1.style.backgroundColor = 'black'
h1.style.color = 'white'
h1.style.padding = '10px'

const styleBody = getComputedStyle(document.body)




paragrafo.forEach((e)=>{
    e.style.backgroundColor = styleBody.backgroundColor
    e.style.color = 'white' 
})