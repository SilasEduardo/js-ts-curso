function showHour(){
    let date = new Date()

   return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//intervalo de tempo
let timer = setInterval(function () {
    console.log(showHour());
}, 1000);


//execulta só uma vez
setTimeout(function(){
    clearInterval(timer)
}, 10000)