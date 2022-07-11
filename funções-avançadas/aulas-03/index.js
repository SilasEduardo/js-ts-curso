// let valor = function soma(a, b){
//     return a + b
// }

// console.log(valor(10, 2))



// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome, sobrenome, idade
//     }
// }


// console.log(criaPessoa('Silas', 'Eduardo', 23))

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto
//     }
//     return falaResto
// }

// let fala = falaFrase('ola') /// destro dessa função tenho outra função
// let resto = fala('mundo') // aqui estou acessando a outra função.

// console.log(resto)


// function criaMultiplicador(multiplicador){
//     return function(n){
//        return n * multiplicador
//   }

// }

// let duplica = criaMultiplicador(2)
// let triplica = criaMultiplicador(3)
// let quadriplica = criaMultiplicador(4)

// console.log(duplica(2))
// console.log(triplica(2))
// console.log(quadriplica(2))


function criarTabuada(n){
    return function (n2){
        return n * n2
    }
}
for(let i = 1; i <= 10; i++){
    let criar = criarTabuada(i)
    console.log(`essa é a tabuada do ${i}`)
    for(let j = 1; j <= 10; j++){
        console.log( `${i} x ${j} = ${criar(j)}`)
    }
    
}