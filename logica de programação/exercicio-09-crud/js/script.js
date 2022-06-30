let  usuario = document.querySelector('#usuario')
let showUser = document.querySelector('#showUser')
let listUser = []

function createUser(user){
    return  `<di class="flex"><p>${user}</p> <button>editar</button> <img width="20px" src="./img/delete.png" >`
  }
usuario.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        listUser.push(usuario.value)
      showUser.innerHTML += createUser(listUser.pop())
      usuario.value = ''

    }
} )






