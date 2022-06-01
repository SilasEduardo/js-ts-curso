/*
&& -> false && -> false 'valor mesmo" 
|| -> true || False -> vai retorna o valor verdadeiro

value FALSY
*false
*0
*'' "" ``
*null
NaN
*/

    //END

// function valida (value){
//     return value
// }

// function falaOi (){
//     console.log('Oi')
// }

// valida(true) && falaOi();


    // OR

const corUsuario = 'blue ';
const corPadao = 'red';

const cor = corUsuario || corPadao;

function definirCor (cor){
    console.log(cor)
}

definirCor(cor)