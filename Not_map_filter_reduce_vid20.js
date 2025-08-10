let arr = [45, 23, 21]

//Array map method
let n = arr.map((value, index, array) =>{
    console.log(value, index, array)
    return value + index
})
// console.log(arr)
console.log(arr)

//Array filter method
let arr2 = [34, 24, 98, 0, 67]
let j = arr2.filter((a) =>{
       return a<40
})
console.log(j, arr2)

//Array reduce method
let arr3 = [4, 5, 6, 9, 8]
let newarr3 = arr3.reduce((g,k) =>{
    return g - k

})
console.log(newarr3)

//Array reduce method.2
let arr4 = [4, 5, 6, 9, 8]
 const reduce_func = (o, p) =>{
    return o + p

}
let newarr4 = arr4.reduce(reduce_func)
console.log(newarr4)