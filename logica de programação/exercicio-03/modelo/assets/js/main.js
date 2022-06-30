const elementos = [

    {tag: 'p', text: 'Frase - 1'},
    {tag: 'div', text: 'Frase - 2'},
    {tag: 'section', text: 'Frase - 3'},
    {tag: 'footer', text: 'Frase - 4'},

]

const container = document.querySelector('.container')
const div = document.createElement('div');


for(let i = 0; i < elementos.length; i++){
   let {tag, text} = elementos[i];


   let creatTag = document.createElement(tag)
   creatTag.innerText = text

   
   div.appendChild(creatTag)
}

container.appendChild(div)