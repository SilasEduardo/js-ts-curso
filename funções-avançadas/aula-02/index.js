// function funcao(){
//  console.log(arguments[7]); // variavel sepecial que  sutenta todos os argumentos enviados
// }
// funcao('valor', 1,2,34,5,6,7, 'Caio');


// function funcao02(a, b, c, d, e, f){
//     console.log(b,c,d,e,f)
// }


// funcao02(1,2,3,4,5)


// function funcao01({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }
// funcao01({nome: 'Silas', sobrenome: 'Eduardo', 'idade': 23})

// let valor = ['Silas', 'Eduardo', 'Paula'] 

// function funcao03([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3)
// }

// funcao03(valor)


const calcular = function(ope, acu, ...num){
    for(let nums of num){
        switch(ope){
            case '+':
                acu += nums;
                break;
            case '-':
                acu -= nums;
                break;
            case '*':
                acu *= nums;
                break;
            case '/':
                acu /= nums;
                break;
            default:
        }
    } 

    console.log(acu)
    console.log(acu)
}

calcular('*', 1, 20,   4 ,50)