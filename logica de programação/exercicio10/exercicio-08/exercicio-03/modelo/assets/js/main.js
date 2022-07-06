
function relogio(){
// formata o relogio
function createHourofseconds(seconts){
   let date = new Date(seconts * 1000)
    return date.toLocaleTimeString('pt-BR', {
       hour12: false,
       timeZone: 'GMT'
    });
 }
 
 // inicia a contagem do relogio
 let seconds = 0
 let timer
 function initWatch(){
    timer = setInterval(()=>{
       seconds ++
      watch.innerHTML = createHourofseconds(seconds)
    }, 1000)
 }

 const watch = document.querySelector('.relogio')
 
 
 const init = document.querySelector('.iniciar')
 const stop = document.querySelector('.pausar')
 const reset = document.querySelector('.zerar')
 
 
 init.addEventListener('click', ()=>{
    clearInterval(timer)
    initWatch()
    watch.classList.remove('pausarHour')
 })
 
 stop.addEventListener('click', ()=>{
    clearInterval(timer)
    watch.classList.add('pausarHour')
 })
 
 reset.addEventListener('click', ()=>{
    watch.innerHTML = "00:00:00"
    seconds = 0
    clearInterval(timer)
    
    watch.classList.remove('pausarHour')
 
 })
 
}relogio()