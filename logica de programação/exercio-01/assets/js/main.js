let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let form = document.querySelector('form')
let output = document.querySelector('#output')
let msg = ''


function vetificaIMC(value){

     if(value < 18.5 && value >= 10){
         msg = `Seu IMC é ${value} (Abaixo do peeso)`
     }
     
    else if(value >= 18.5 && value <= 24.9){
        msg = `Seu IMC é ${value} (Pesso Normal)`
     }
     
    else if(value >= 25 && value <= 29.9){
        msg = `Seu IMC é ${value} (Sobrepeso)`
    }
    
    else if(value >= 30 && value <= 34.9){
        msg = `Seu IMC é ${value} (Obesidade grau 1)`
     }
     
    else if(value >= 35 && value <= 39.9){
        msg = `Seu IMC é ${value} (Obesidade grau 2)`
     }
    else if(value >= 40){
        msg = `Seu IMC é ${value} (Obesidade grau 2)`

    } else{
        msg = `Valor Invalido`
    }

    return msg;
}

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    peso = parseFloat(peso.value)
    altura = parseFloat(altura.value)
   let resultado = peso/(altura * altura)
   
   if(vetificaIMC(resultado) === 'Valor Invalido'){
       output.classList = 'output2'
       output.innerHTML = vetificaIMC(resultado.toFixed(1))
   }else{
    output.classList = 'output'
    output.innerHTML = vetificaIMC(resultado.toFixed(1))
   }
})