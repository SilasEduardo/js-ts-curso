function aliatoris(min, max){
    let rand = Math.round(Math.random(min) * max)
    return rand
}
const min = 1;
const max = 50;
let rand = aliatoris(min, max)

while(rand !== 10){
    console.log(`não é ${rand}`)
    rand = aliatoris(min, max)
}
console.log(`é ${rand}`)

