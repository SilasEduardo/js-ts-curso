/*
Operadores logicos

&& -> AND -> e -> Todas expressões precisar ser verdadeira para retornal verdaira
|| -> OR -> ou -> Todas expressoes precisao ser falsas para dar falso
! -> NOT -> não -> inverte a expreção; 

*/
// const expressaoEnd = true && true && true && false; //false
// const expressaoEnd2 = true && true && true ; // true


// const expressaoOr = true || true || true || false // true
// const expressaoOr = true || false || false || false // false


//Exemplo

const usuario = "Silas"; // usuario digitou
const senha = "1234"; // usuario digitou


const vaiLogar = usuario === 'Silas' && senha === '1234'; // se trocar a senha da erro.

if(vaiLogar === true){
    console.log('Logou')
}else{
    console.log('Senha ou Usuarios incorreto')
}
