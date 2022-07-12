function criaOutra(){
    const nome = 'Silas'
    return ()=>{
        return nome
    }
}

const funcao = criaOutra();
let nome = funcao()


console.log(nome)