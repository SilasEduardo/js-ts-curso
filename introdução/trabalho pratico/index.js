function myScope(){

    const form = document.querySelector('form');
    const nome = document.querySelector('#nome');
    const sobre = document.querySelector('#sobre');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');


    const rander = document.querySelector('#rander');
    





    let storeData = []



    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        storeData.push({'nome': nome.value, 'Sobrenome': sobre.value, 'peso': peso.value, 'altura': altura.value})

        rander.innerHTML += `<br><p> Nome: ${nome.value}  Sobrenome: ${sobre.value} Peso: ${peso.value} Altura: ${altura.value}</p>`

        console.log(storeData)
        
    })

}

myScope()