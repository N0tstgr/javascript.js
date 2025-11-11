let a =   document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>  Hello World !</h1>';
// div.innerhtml = '<h2>  embedded system</h2>';

// a.append(div)
// a.before(div);
// a.after(div)
a.replaceWith(div)

