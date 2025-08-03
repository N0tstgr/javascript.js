 const prompt = require('prompt-sync')();
//  const alert = require('alert-sync')();
 
 let a = prompt("hey what;s your age ? :")
// console.log(typeof a)
// Number, String, undefined, Null 
a = Number.parseInt(a) //converting the string to the number
if(a<0){
     console.log("this is an invalid age")
}
else if(a<9 ){
    console.log("You are a kid cannot even think of driving")
}else if(a<18 && a>=9){
    console.log("you are becoming to an adult you can think of driving")
}
else{
    console.log("you are far good  enough to driving and congratulations you are eligible")
}
console.log("Done")
console.log("you can ", (a<18? "not drive" : "drive"))

    //