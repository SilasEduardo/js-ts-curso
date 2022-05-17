console.log('ola, mundo');




// Exercio aula 1

const data = new Date()


if(data.getHours() < 18){
    console.log(`meu nome é "${'Silas'}". Estou aprendendo javascript as ${data.getHours()} do dia`)
}else{
    console.log(`meu nome é "${'Silas'}". Estou aprendendo javascript as ${data.getHours()} da noite`)
}