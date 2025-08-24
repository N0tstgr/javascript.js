const prompt = require("prompt-sync")();

let a = Math.floor(Math.random()*10)+1
console.log(a)
let guesses = 0

while(true){

let b = Number(prompt("Enter the number to be guessed  in range of (1-100! : "))

if(b>100 || b<1|| isNaN(b)){
    console.log("This is a invalid input, Enter again to match the given range : ")
continue}
guesses++


if(a == b){
    let score = 100-guesses
console.log("This is a correct number",a);
console.log(" Booyah ! your score is " ,score,"in", guesses, "attemepts")
break
}
else if(b>a){
    console.log("This is a greater number than the original number", a)
}else if(b<a){
    console.log("This number is lesser than the original number",a)
}

}