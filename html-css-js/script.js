console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" !=false)
console.assert("err" ==false)


console.time("forloop")
for(let i =0; i<5; i++){
    console.log(455)
}
console.timeEnd("forloop")

///
console.time("whileLoop")
let i = 0;
while(i<500){
    console.log(432)
i++;

}
console.timeEnd("whileLoop")