let no = [3, 5, 7, 9, 2]
// for(let i=0; i<no.length; i++){
//     console.log(no[i])
// }

//For Eachloop
// no.forEach((element) => {
//     console.log(element*element)
// })
//Array from 

let name = "vikashthetrillioniare"
let arr = Array.from(name)
console.log(arr)


//for of
for (let item of no){
    console.log(item)
}


//for in
for (let i in no){
    console.log(no[i])
    console.log(i)
}