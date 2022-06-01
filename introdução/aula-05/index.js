let varA = "A";
let varB = "B";
let varC = "C";
let temp = null;

// temp = varA
// varA = varB
// varB = varC
// varC = temp

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
// console.log(`Variavel A: ${varA}\n Varial B: ${varB}\n Variavel C: ${varC}`)