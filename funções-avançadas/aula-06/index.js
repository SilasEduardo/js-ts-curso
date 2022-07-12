function aliatorios(min = 1000, max = 3000){
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor)

}

function f1(callback){
    setTimeout(()=>{
         console.log('f1')
         if(callback) callback();
    }, aliatorios())
}
function f2(callback){
    setTimeout(()=>{
        console.log('f2')
        if(callback) callback();
   }, aliatorios())
}
function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if(callback) callback();
   }, aliatorios())
}




// f1(()=>{ // callback
//     f2(()=>{
//         f3(()=>{

//             console.log('Ola mundo!')
//         })
//     })
// });


f1(callbackf1);

function callbackf1(){
    f2(callbackf2)
}


function callbackf2(){
   f3(callbackf3)
}

function callbackf3(){
    console.log('ola, mundo!')
}