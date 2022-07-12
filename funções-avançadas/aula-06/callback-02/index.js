function aliatorio(min = 1000, max = 3000){
    let valor = Math.random() * (max - min) + min;
   return Math.floor(valor)
}



function f1(callback1){
    setTimeout(()=>{
        if(callback1) callback1()
        console.log('F1')
    }, aliatorio())
}
function f2(callback2){
    setTimeout(()=>{
        if(callback2) callback2()
        console.log('F2')
    }, aliatorio())
}
function f3(callback3){
    setTimeout(()=>{
        if(callback3) callback3()
        console.log('F3')
    }, aliatorio())
}


f1(callback1)
function callback1(){
    f2(callback2)
}
function callback2(){
    f3(callback3)
}
function callback3(){
    console.log('mwlhores do mundo!')
}