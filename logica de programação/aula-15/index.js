
// try{
// console.log(naoExiste)
// }catch(e){
//     console.log('sssss')
// }
// function soma(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         throw new('não é um numero')
//     }
//     return a + b
// }

// try {
//     console.log(soma(2, 4))
// }catch(e){
//     console.log(e)
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Espendo uma instancia de Date.')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora)
}catch(e){
    console.log(`${e} Erro`)
}finally{
    console.log('Tenha um bom dia.')
}