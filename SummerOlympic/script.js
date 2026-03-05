fucntion timing ()
const targetDate = new Date("July 14 ,2028 20:00:00").getTime();
setInterval(()=>{
    const now = new Date().getTime();
    const distance = targetDate-now;
    const day = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);
    console.log(`${day}d,${hours}h,${minutes}m, ${seconds}s`);
},1000);