import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'

setInterval(displayDateTime, 500)
function displayDateTime() {

  let now = new Date();
  let date = now.getDate();
  let day = now.getDay();
  let year = now.getFullYear();
  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "Sunday";
      break;
  }

  if(hours < 10){
    hours = "0" + hours;
  }

  if(min < 10){
    min = "0" + min;
  }

  if(sec < 10){
    sec = "0" + sec;
  }

  let html = date + ", " + day + " " + year + ", " + hours + " : " + min + " : " + sec + " PM "

  document.getElementById("dateTime").innerHTML = html

}

export default function Topbar() {
  return (

    <div className="container-fluid">
      <div className="row bg-success py-2">
        <div className="col">
          <div className='text-center text-light fw-bold' id='dateTime'></div>
        </div>
      </div>
    </div>

  )
}
