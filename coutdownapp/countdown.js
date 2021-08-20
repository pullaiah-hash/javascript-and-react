const days = document.getElementById("days")
const hour = document.getElementById("hours")
const minute = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
let year = new Date().getFullYear()



function updateCount(){
    let currentTime = new Date()
let countDownTime = new Date(`july 16 ${year} 00:00:00`)
    let diff = countDownTime-currentTime
    let d = Math.floor(diff/1000/60/60/24)
    let h = Math.floor((diff/1000/60/60)%24)
    let m = Math.floor((diff/1000/60)%60)  
    let s = Math.floor((diff/1000)%60)
    days.innerHTML=d<10?"-0"+d:d
    hour.innerHTML=h<10?"-"+"0"+ h:"-"+h
    minute.innerHTML=m<10?"0"+"-"+m:"-"+m   
    seconds.innerHTML="-"+s
}
setInterval(updateCount,1000)
