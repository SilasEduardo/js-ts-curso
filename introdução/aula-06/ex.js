



const nome = prompt('Digite seu nome completo:');


let numeroLetras = nome.length
let segundaLetra = nome.charAt(1);
let indeceLetra = nome.indexOf('a')
let ultimoIndice = nome.lastIndexOf('a')
let ultima3letras =  nome.slice(-3)
let nomes = nome.split(' ')

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${numeroLetras} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${indeceLetra}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${ultimoIndice}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultima3letras}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nomes}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;