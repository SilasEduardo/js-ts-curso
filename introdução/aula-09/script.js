const title = document.querySelector("#title");
const lista = document.querySelector("#lista");




let number = prompt("Digite um número: ") 

number = parseFloat(number)
let isInt = Number.isInteger(number)
let isNan = Number.isNaN(number)
let raiz = number ** 0.5
let toUp = Math.ceil(number)
let toShort = Math.floor(number)




console.log(isInt)



title.innerHTML = `<h1>Seu Número é ${number}</h1> <br />`;


lista.innerHTML += `<p>Raiz Quadrada ${raiz}</p>\n`;
lista.innerHTML += `<p>${number} é um inteiro ${isInt}</p>\n`;
lista.innerHTML += `<p>é um NaN: ${isNan}</p>\n`;
lista.innerHTML += `<p> Arredondar Para baixo ${toShort}</p>\n`;
lista.innerHTML += `<p>A errondar para cima ${toUp}</p>\n`;
lista.innerHTML += `<p>Com duas casas decimais ${number.toFixed(2)}</p>\n`;