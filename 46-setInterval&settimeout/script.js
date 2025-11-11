document.write("hello")

const sum = (a , b, e) =>{
    console.log("to day is great day " + (a + b + e))
    a + b
}

setTimeout(sum, 1000, 1, 7, 4)
// setInterval(function (){
//     console.log("This is the right time")
// }, 1000)

// let a = setTimeout(function(){
//     alert("I am unable of settimeout")
// }, 5000)


// let b = prompt(" do you want to run the settimeout?")
// if("n" == b){
//     clearTimeout(a)
// }
// clearTimeout(a)
// console.log(a)

const subtract = (p , q) =>{
    console.log("this is the subtraction "  + (p-q))
    
}
const timer = setInterval(subtract, 2000, 90,70)
setTimeout(()=>{
    clearInterval(timer);
    console.log("Interval Stopped")
}, 4000

)

