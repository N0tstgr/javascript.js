const timer = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
timer.style.fontSize = "100px";
timer.style.display  = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.backgroundColor = "orange";


