// let tresHoras = 60 * 60 * 8700 * 1000
// let umDia = 60 * 60 * 24 * 1000
// let umAno = 60 * 60 * 8700 * 1000


// // const data = new Date(2019, 3, 1, 14, 2);

// const data =  new Date('2019-04-20 20:20:59');

// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth())
// console.log('Ano', data.getFullYear())
// console.log('Hora',data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.setMilliseconds())
// console.log('dia da semana', data.getDay())
// console.log(data.getDate())


function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formateData(data){
    const dia = zeroEsquerda(data.getDate()) 
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())
    const hora = zeroEsquerda(data.getHours())


    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}



let data = new Date()
const formatoBrasil = formateData(data);

console.log(formatoBrasil)