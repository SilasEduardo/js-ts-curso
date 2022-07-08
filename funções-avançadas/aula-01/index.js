// Declaração de função (Função hoisting)

function falaOi(){
    console.log('Oie')
}

// First Class Objects (Objetos de Premeira classe)



const souUmDado = function() {
    console.log('Sou um Dado')
}


function execultarFucao(funcao){
    funcao()
}                     
execultarFucao(souUmDado)

// Arrow function

const funcaoArrow = () =>{
    console.log('sou uma função arrow')
}

funcaoArrow()