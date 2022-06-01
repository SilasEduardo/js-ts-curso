const firtName = "Silas";
const lestName = "Paula";
let age = 27;
let weight = 102;
let height = 1.90;
let imc = weight/(height * height)

let phrase = `${firtName} de ${lestName} tem ${age} anos, ${weight} kg tem ${height} de altura e seu  IMC é de ${imc.toFixed(0)}`;


if(imc >= 25 && imc <= 30){
    console.log(`${firtName} Cuidado você esta acima do peso, esta com sobrepeso.`)
}else if(imc > 30){
    console.log(`${firtName} Cuidado você esta acima do peso, esta com obesidade.`)
}else{
    console.log(`${firtName} paraben você esta com um IMC otimo!!!`)
}

console.log('\n',"Dados Pessoais: ", phrase)