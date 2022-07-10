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


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('olá')
console.log(olaMundo('mundo'))