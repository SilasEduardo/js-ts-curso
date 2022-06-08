// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const list =[b, c, a];  
// [a, b, c] = list; // atribuição via desesultruração


// console.log(a, b, c)
// ... rest, spread
// const numeros = ['UM', 2, 3, 4, 5, 7, 8, 9, 10]
// // const [primriro, segundo, tercceiro, ...resto] = numeros;
// // const [primeiro, , ,quarto, ...resto] = numeros;


const nomeros1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

// const [, [, , seis]] = nomeros1

const[lista1, lista2, lista3] = nomeros1



console.log(lista2[2])