let  usuario = document.querySelector('#usuario')
let showUser = document.querySelector('#showUser')
let delet = document.querySelector('.flex')



let listUser = []

function createUser(user){
     `<di class="flex"><p>${user}</p> <div><button id="edit"><img width="20px" src="./img/delete.png" ></button> <button onclick="deleteItem()"><img width="20px" src="./img/delete.png" ></button></div>`
  }
usuario.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        listUser.push(usuario.value)
      showUser.innerHTML += createUser(listUser.pop())
      usuario.value = ''

    }
} )


function deleteItem(){
  listUser.pop() = ''
}



