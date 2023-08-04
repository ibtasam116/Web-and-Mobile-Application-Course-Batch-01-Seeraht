
// Top Bar Date Time

setInterval(TopBarDateTime, 500)

function TopBarDateTime() {
    let now = new Date();
    let date = now.getDate();
    let day = now.getDay();
    let year = now.getFullYear();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    if (hours < 10){
        hours = "0" + hours
    }

    if(min < 10){
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    switch (day) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        default:
            day = "Saturday"
            break;
    }
    let html = date + ", " + day + " " + year + "  " + hours + " : " + min + " : " + sec + " PM ";

    document.getElementById("time").innerHTML = html;
}
