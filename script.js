let hours = document.getElementById("hours");
let minuts = document.getElementById("minuts");
let seconds = document.getElementById("seconds");

setInterval(() => {
    const d = new Date() ;
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    // console.log(htime,mtime,stime);
    

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minuts.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);