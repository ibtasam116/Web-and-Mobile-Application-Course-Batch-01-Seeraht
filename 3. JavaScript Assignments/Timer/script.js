// alert("Hello")

setInterval(displayClock, 500)

function displayClock() {


    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById('time1').innerHTML = hours + ' : ' + min + ' : ' + sec;
}