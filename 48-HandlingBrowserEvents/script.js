let x = function(e){
    console.log(e)
alert("Greatness is loading")}

let y = function(e){
    console.log(e)
        alert("do the things even you see the darkness")

}
btn.addEventListener('click', x)

btn.addEventListener('click',y)

btn.removeEventListener('click', z)


let a = prompt("what is your favourite number ? ")
if (a == "1") {
    btn.removeEventListener('click', x)
}