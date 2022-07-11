const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefas')
function creaLi(){
   const li = document.createElement('li')
   return li
}

inputTarefa.addEventListener('keypress', (event)=>{
   if(event.key === 'Enter'){
      if(!inputTarefa.value)return;
    criaTarefa(inputTarefa.value)
   }
   })
function criaTarefa(tarefaText){
   const li = creaLi()
   li.innerHTML = `${tarefaText}`
   tarefa.appendChild(li)
   limpaImput()
   criaBotaoApagar(li)
   salvarTarefas();
}

function limpaImput(){
   inputTarefa.value = ''
   focus(inputTarefa)
}
function criaBotaoApagar(li){
   li.innerText += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar';
   botaoApagar.setAttribute('class', 'apagar')
   li.appendChild(botaoApagar)
}

btnTarefa.addEventListener('click', (e)=>{
  if(!inputTarefa.value)return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', (e)=>{
   const el = e.target
   if(el.classList.contains('apagar')){
      el.parentElement.remove()
      salvarTarefas()
   }
});


function salvarTarefas(){
   const liTarefas = tarefa.querySelectorAll('li');
   const listaTarefas = [];

   for(let tarefas of liTarefas){
      let tarefaTexto = tarefas.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaTarefas.push(tarefaTexto)
   }

   const tarefasJSON = JSON.stringify(listaTarefas)
   localStorage.setItem('tarefaz', tarefasJSON);
}
function addTarefazSalvas(){
   const tarefas = localStorage.getItem('tarefaz')
   const listaDetarefas = JSON.parse(tarefas)
   for(let tarefa of listaDetarefas){
      criaTarefa(tarefa)
   }
}

addTarefazSalvas()