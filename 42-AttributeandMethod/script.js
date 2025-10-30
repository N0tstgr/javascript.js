let first = document.getElementById("first")

let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("ubutnu"))
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true")
first.removeAttribute("class")