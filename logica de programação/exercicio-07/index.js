function eDivisivil(n){
    if(!isNaN || n % 3 !== 0 && n % 5 !== 0) return n
    if(n % 3 === 0 && n % 5 ===0) return 'FizzBuzz'
    if(n % 3 === 0) return 'Fizz'
    if(n % 5 === 0) return 'Buzz'
}

for(let i = 1; i<= 100; i++){
    console.log(eDivisivil(i))
}