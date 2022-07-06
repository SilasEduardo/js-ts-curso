let  usuario = document.querySelector('#usuario')
let showUser = document.querySelector('#showUser')
let delet = document.querySelector('.flex')



let listUser = []


function createUser(user){
    return `<di class="flex"><p>${user}</p> <div><button id="edit"><img width="20px" src="./img/delete.png" ></button> <button onclick="deleteItem1()"><img width="20px" src="./img/delete.png" ></button></div>`
  }
usuario.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        listUser.push(createUser(usuario.value))
        showUser.innerHTML += listUser.pop()
        usuario.value = ''

    }
    

    return showUser
} )







