const frutas = ['maça', 'pera', 'melão', 'abacaxi']
const pessoas ={
    nome: 'Silas',
    sobreNome: 'Eduardo',
    idade: 27,
    logradoro: 'Rua domingos da guia'
}

const nome = 'Silas Eduardo'

// for clacico regalmente com interáveis(arrays ou strings)
// for(let i = 0;i < frutas.length; i++){
//  console.log(frutas[i])
// }


// for in Retorna o indece ou chaves(strings, arrays ou objetos)
// for(let i in pessoas){
//     console.log(`${i}: ${pessoas[i]}`)
// }
// for of retorna o valor só funciona(interaveis)
// for(i of pessoas){
//     console.log(pessoas[i])
// }

frutas.forEach((e, i, a)=>{
    console.log( a)
})
