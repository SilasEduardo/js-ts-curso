// const nome01 = {
//     nome: "Silas",
//     sobrenome: "de Paula",
//     idade: 25
// };

// console.log(nome01.nome)
// console.log(nome01.sobrenome)
// console.log(nome01.idade)

// const pessoas = (nome, sobrenome, idade) => {
//  return {nome,sobrenome,idade}
// }  

// const pessoa1 = pessoas("Silas", "Paula", 27)
// const pessoa2 = pessoas("Daniel", "Paula", 28)
// const pessoa3 = pessoas("Isaque", "Paula", 31)


// console.log(pessoa1,  pessoa2, pessoa3)

const pessoas5 = {
    nome: "Silas",
    sobrenome: "Paula",
    idade: 27,
    fala(){
        console.log(this.nome, this.idade)
    },
    inclementa (){
        this.idade++
    }
}
pessoas5.inclementa()
pessoas5.fala()