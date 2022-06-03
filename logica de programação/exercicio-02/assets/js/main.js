
// const data = new Date();
// const output = document.querySelector('#output');
// let msg;



// function getDayWeek(dayWeek){
//     let dayMonthText;
    

//     switch(dayWeek){
//         case 0:
//             dayWeekText = 'Domingo';
//             return dayWeekText
//         case 1:
//             dayWeekhText = 'Segunda-Feira';
//             return dayWeekText
//         case 2:
//             dayWeekText = 'Terça-Feira';
//             return dayWeekText
//         case 3:
//             dayWeekText = 'Quarta-Feira';
//             return dayWeekText
//         case 4:
//             dayWeekText = 'Quinta-Feira';
//             return dayWeekText
//         case 5:
//             dayWeekText = 'Sexta-Feira';
//             return dayWeekText
//         case 6:
//             dayWeekText = 'Sabado';
//             return dayWeekText
//     }
// }

// function getMonth(dayMonth){
//     let dayMonthText = ['Janeiro', 'fevereiro', 'Março','Abril','Maio','Junho','Julho',        'Agosto','Setembro','Outrubo','Novembro','Desembro']

reut
    

//    
// }

// let dayWeek = getDayWeek(data.getDay())
// let dayMonth = getMonth(data.getMonth())


// function buildMessage(data, dayWeek, dayMonth){

//     const day = data.getDay()
//     const year = data.getFullYear()
//     const hour = data.getHours()
//     const minuts = data.getMinutes()

//     function zeroEsquerda(num){
//        return num >= 10 ? num : `0${num}`
//     }

//     return msg = `${dayWeek}, ${day} de ${dayMonth} de ${year} as ${zeroEsquerda(hour)}:${zeroEsquerda(minuts)}`;
// };


// msg = buildMessage(data, dayWeek, dayMonth)

// output.innerHTML = msg

const data = new Date();
const output = document.querySelector('#output');
const options = {
    dateStyle: 'full',
    timeStyle: 'Short'
    
};

output.innerHTML = data.toLocaleDateString('pt-BR', options);
