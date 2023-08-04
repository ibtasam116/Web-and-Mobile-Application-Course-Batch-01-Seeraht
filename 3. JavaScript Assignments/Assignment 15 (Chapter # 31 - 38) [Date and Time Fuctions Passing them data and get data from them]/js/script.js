

// Clear Output / Result
clearOutput = () => {
    document.getElementById('outputResult').innerHTML = "";
}

// Clear Input Field
clearInput = () => {
    document.getElementById('inputText').value = "";
}

// Emoji
addEmoji = (param1) => {

    html = '<span style="font-size: 40px">' + param1 + '</span>';
    document.getElementById('outputResult').innerHTML += html;
}

// This function is used for output Result
// function inputValue() { /* Simple Function */
//     return document.getElementById('inputText').value;
// }

const inputValue = () => { /* Arrow Function */
    return document.getElementById('inputText').value;
}

// This function is used for output Result
// function showOutput(output) { /* Simple Function */
//     document.getElementById('outputResult').innerHTML = output;
// }

const showOutput = (output) => { /* Arrow Function */
    document.getElementById('outputResult').innerHTML = output;
}

// -------------------------------------------------------------------------------

// Array for Name of Days
var dayNames = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// Array for Cities
var Cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura"]

// Text for Original Text Box
let rightNowDate = new Date();

let html = '<span style="font-size: px">' + rightNowDate + '</span>'

document.getElementById('originalTextBox').innerHTML = html;

// Tell Time 
function tellTime() {

    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();
    
    outputResult.innerHTML += "<br> <span style='Font-size: 20px; color:orange'> Your cLicked the button @ " + theHr + ":" + theMin + ":" + theSec + "</span><br />";
}


// Get Name of Today
todayName = () => {
    let rightNow = new Date();
    // console.log(rightNow);

    let theDay = rightNow.getDay();
    // console.log(theDay);

    let nameOfToday = dayNames[theDay]
    // console.log(nameOfToday);

    let html = '<span style="color: green; font-size: 30px; font-weight:bold; text-transform: Capitalize;">' + nameOfToday + '</span>';
    showOutput(html);
    tellTime()
}



// Calculate Days Passed Since I Born
bornDay = () => {
    let dob = inputValue();

    if (!dob) {
        toastifyError('Please Enter Your Date of Birth')
        return;
    }

    let today = new Date();
    let bornDate = new Date(dob);
    console.log(today);
    console.log(bornDate);

    let todayTime = today.getTime() // 16
    let bornDateTime = bornDate.getTime() // 8
    console.log(todayTime);
    console.log(bornDateTime);

    // return

    let msDiff = todayTime - bornDateTime; // 8

    console.log("msDiff", msDiff);

    let daysDiff = msDiff / (1000 * 60 * 60 * 24); // this line may generate foating point Values
    console.log(daysDiff);

    // We remove floating point using Math.floor

    let html = "<span style='color: green; font-size: 20px'>'" + Math.floor(daysDiff) + "'</span> days have been passed since your born.";

    showOutput(html);
    tellTime();
}


// When is your next birthday
yourNextBirthday = () => {
    
    // let now = new Date();
    // console.log(typeof now);
    // console.log(typeof now.toString());
    // console.log("getDay =>", now.getDay());
    // console.log("getDate =>", now.getDate());
    
    let dob = inputValue("usman");
    
    if (!dob) {
        toastifyError('Please enter your date of birth.');
        return;
    }

    let today = new Date();
    // let nextBirthDate = new Date("2021-12-30 18:58:30");
    let nextBirthDate = new Date(dob);

    let msDiff = nextBirthDate.getTime() - today.getTime();

    let daysDiff = msDiff / (1000 * 60 * 60 * 24);

    let html = "Your next birthday is <span style='color: green; font-size: 20px'>'" + Math.floor(daysDiff) + "'</span> days away.";

    showOutput(html);
    tellTime();
}


// Greet User
greetUser = (msg) => {
    showOutput(msg);
}

greetUserButton = () => {

    let userName = prompt("Please Enter Your Name!");

    if(!userName) {
        toastifyError("Please Enter Your Name.");
        return;
    }

    let now = new Date();
    console.log(typeof now);

    let hours = now.getHours();
    // console.log(hours);

    let greetingMsg = "Good ";

    if(hours >= 4 && hours < 12) {
        greetingMsg += "Morning";
    }
    if(hours >= 12 && hours < 17) {
        greetingMsg += "Afternoon";
    }
    if(hours >= 17 && hours < 20) {
        greetingMsg += "Evening";
    } 
    // else {   /* Error Genrating */
    //     greetingMsg += "Night.";
    // }

    let msg = greetingMsg + " " + userName + ".";
    
    greetUser(msg);
    tellTime();
}


// Tell Time 1
tell1 = () => {
    tellTime();

    // let now = new Date();
    // let theHr = now.getHours();
    // let theMin = now.getMinutes();
    // let theSec = now.getSeconds();
    
    // outputResult.innerHTML += "<br> <span style='Font-size: 20px; color:orange'> Your cLicked the button @ " + theHr + ":" + theMin + ":" + theSec + "</span><br />";

    return;
}

// Tell Time 2
tell2 = () => {
    tellTime();

    // let now = new Date();
    // let theHr = now.getHours();
    // let theMin = now.getMinutes();
    // let theSec = now.getSeconds();
    
    // outputResult.innerHTML += "<br> <span style='Font-size: 20px; color:orange'> Your cLicked the button @ " + theHr + ":" + theMin + ":" + theSec + "</span><br />";

    return;
}

// Tell Time 3
tell3 = () => {
    tellTime();

    // let now = new Date();
    // let theHr = now.getHours();
    // let theMin = now.getMinutes();
    // let theSec = now.getSeconds();
    
    // outputResult.innerHTML += "<br> <span style='Font-size: 20px; color:orange'> Your cLicked the button @ " + theHr + ":" + theMin + ":" + theSec + "</span><br />";

    return;
}




// Calculate Tax
calculateTaxBtn = () => {

    let price = +prompt('Enter Price');
    if (!price) {
        toastifyError("Please Enter Your Price.");
        return;
    } 

    let taxRate = +prompt("Enter Tax");
    if (!taxRate) {
        toastifyError('Please Enter Your Tax.');
        return;
    }

    var tax = price * taxRate / 100;

    let html = "Tax: " + tax;

    showOutput(html);
    tellTime();
}

calculateTax = (price, taxRate) => {
    var taxRate = price * taxRate / 100;
    return taxRate; 
}

// Calculate Total = Price + Tax
calculateTotalBtn = () => {

    let price = +prompt('Enter Price');
    if (!price) {
        toastifyError('Please Enter Price.');
        // return;
    }    
    
    var total = calculateTotal(price);

    let html = "Total: " + total;

    showOutput(html);    
    tellTime();
}    

calculateTotal = (price) => {

    var taxRate = +prompt('Enter Tax Rate.')

    // if (price > 1000) {
    //     var taxRate = 8;
    // } else {
    //     var taxRate = 17;
    // }

    var tax = calculateTax(price, taxRate)

    var total = price + Math.round(tax);

    return total;
}

// -----------------------------------------------------------------------------------------

// Toastify Custom Function 
// For Error 
toastifyError = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #200122, #6f0000)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
    return;
}

// For Success 
toastifySuccess = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #000000, #0f9b0f)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
    return;
}




















