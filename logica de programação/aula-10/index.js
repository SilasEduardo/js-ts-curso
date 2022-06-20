const pessoa = {
    nome: 'Silas',
    sobrenome: 'Eduardo'.at,
    idade: 30,
    endereco:{
        logadoro: 'Av  Brasil',
        nume: 320
    }
};
// const { 
//     idade,
//     nome,
//     sobrenome,
//     data: data = '27/02/2022' ,
//     endereco:{
//         logadoro,
//         nume,
//     }
// } = pessoa

const {nome, ...rest} = pessoa



console.log(rest)