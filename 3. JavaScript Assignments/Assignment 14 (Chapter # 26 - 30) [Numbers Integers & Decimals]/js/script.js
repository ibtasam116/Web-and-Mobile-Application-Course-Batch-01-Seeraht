
// Youtube Lectuer Link
// https://youtu.be/sGbOVShmDRQ?list=PLAUQDR4udhMJBPCRAwtu8uzVEACOSP-xH

let originalDecimalNumber = '<span style="font-size: 45px">25.12345</span>';

document.getElementById('originalTextBox').innerHTML = originalDecimalNumber;

// Round A Number 
// Round means agr point . k bad 5 sy greater value hai to 1 increase krna otherwise decrease krna
roundNumber = () => {

    let number = inputText();

    if (!number) {
        Toastify({
            text: "Please enter floating number in input field.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        // alert('Please enter floating number in input field.');
        return;
    }

    let round = Math.round(number);     /* Example: Math.round(1.49) = 1 & Math.round(1.50) = 2 */

    let html = '<h1 class="text-primarytheme mb-0">' + round + '</h1>'

    document.getElementById('outputResult').innerHTML = html;
}


// Ceil A Number 
// Ceil means add krna value ma
ceilNumber = () => {

    let number = inputText();

    if (!number) {
        Toastify({
            text: "Please enter floating number in input field.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #5614B0, #DBD65C)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        // alert('Please enter floating number in input field.');
        return;
    }

    let ceilNumber = Math.ceil(number);     /* Example: Math.ceil(1.5) = 2 */

    let html = '<h1 class="text-primarytheme mb-0">' + ceilNumber + '</h1>'

    document.getElementById('outputResult').innerHTML = html;
}


// Floor A Number
// Floor means less krna value ma
floorNumber = () => {

    let number = inputText();

    if (!number) {
        Toastify({
            text: "Please enter floating number in input field.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #4B79A1, #283E51)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        // alert('Please enter floating number in input field.');
        return;
    }

    let floorNumber = Math.floor(number);       /* Example: Math.floor(1.5) = 1 */

    let html = '<h1 class="text-primarytheme mb-0">' + floorNumber + '</h1>'

    document.getElementById('outputResult').innerHTML = html;
}

// Generate Random Number

generateRandomNumber = () => {

    let randomNumber = Math.random();

    let html = '<h1 class="text-primarytheme mb-0">' + randomNumber + '</h1>'

    document.getElementById('outputResult').innerHTML = html;
}


// Throw A Dice
throwDice = () => {
    let randomNumber = Math.random();
    // console.log(randomNumber);

    // randomNumber = (randomNumber * 6 ) + 1;     // Number between 1 to 6
    // console.log("Number after", randomNumber);

    randomNumber = (randomNumber * 9) + 1;     // Number between 1 to 9    
    // console.log("Number after", randomNumber);

    let dice = Math.floor(randomNumber);

    // For generating number between 1 to 6
    // let html = '<h1 class="text-primarytheme mb-0">' + dice + '</h1><span>Generating a random number from 1 to 6 </span>'

    // For generating number between 1 to 9
    let html = '<h1 class="text-primarytheme mb-0">' + dice + '</h1><span>Generating a random number from 1 to 9 </span>'

    document.getElementById('outputResult').innerHTML = html;
}


// Generate A Strong Password
strongPassword = () => {
    // let length = inputValue();
    let length = inputText();

    if (!length) {
        Toastify({
            text: "Please enter the length of String and Password in  Input field.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #e73827, #f85032)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

        return;
    }

    let randomString = "";

    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // console.log(upperCaseAlphabets.length);

    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    // console.log(lowerCaseAlphabets.length);

    let numbers = "0123456789";
    // console.log(numbers.length);

    let symbols = "`~!@#$%^&*-_=+/?.";
    // console.log(symbols.length);

    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
    // console.log(possibleString.length)

    let limit = length;
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random();
        // console.log(randomNumber * 8);

        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));

    }

    let html = '<h3 class="text-primarytheme mb-0">' + randomString + '</h3><span>Generating random String & Password: <br/> The length of String & Password is: </span><span style="color: red; font-size: 20px">' + limit + '</span>'

    document.getElementById('outputResult').innerHTML = html;
}


// Converting String into integers and decimals
convertingString = () => {

    let num1 = "251.12345";
    // console.log(num1);
    // console.log(typeof num1)

    // ParseInt()
    num1 = parseInt(num1)
    console.log(num1, "parseInt Function")
    console.log(typeof num1)

    // ParseFloat()
    num1 = parseFloat(num1);
    console.log(num1, "parseFloat Function");
    console.log(typeof num1);

    // convert the string into number by this function
    // Number()         The first letter of this function is Capital. 
    num1 = Number(num1);
    console.log(num1);
    console.log(typeof num1);

    // Fix the integer after the decimal point
    // toFixed()        This function only work on number/integers. After this function the value is convert in string autometically
    num1 = num1.toFixed(4);
    console.log(num1);
    console.log(typeof num1);

    // num1 = Number(num1);
    // console.log(num1, "Again convert into number after apply tofixed function.")
    // console.log(typeof num1)

    // ----------------------------------------------------------------------------------

    let num = inputText();

    if (!num) {
        Toastify({
            text: "Please enter value in input field.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #e73827, #f85032)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

        return;
    }

    // Type of input Field number which is in string
    let typeIn = typeof num;
    let num2 = Number(num);

    // Type of input field number after convert into number
    let type = typeof num2;

    html = 'The Type of Number Which Placed in Input Field is:<br><span style="color: purple; text-decoration:underline; font-size: 20px">' + num + '<br>' + typeIn + '</span><br>Vaule which placed in Input Field is converted into the type of Number:<br><span style="color: green; font-size: 25px">' + num2 + '</span><br><span style="color: green; font-size: 25px">' + type + '</span>';
 
    document.getElementById('outputResult').innerHTML = html

    // console.log(typeof num);
    // console.log(num2);
    // console.log(typeof num2);
}


// Controlling the lenght of decimal number after the decimal point
controllingLenght = () => {

    let num = inputText();

    if (!num) {
        Toastify({
            text: "Please Enter Decimal Number!",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #0F2027, #2C5364)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return;
    }

    // First convert the input value which is in string type into number
    num = Number(num);

    // Now fixed the number of decimal point / After the toFixed function number change into string type automatically
    num = num.toFixed(2);

    // Again convert into number;
    num = Number(num);

    html = '<span style="color: green; font-size: 25px">' + num + '</span>'

    document.getElementById('outputResult').innerHTML = html;

    // console.log(num);
}


// Calculate GST
calculateGST = () => {

    let cost = inputText();

    if (!cost) {
        Toastify({
            text: "Please Enter Decimal Number!",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #0F2027, #2C5364)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return;
    }

    // Convert the String value in to number 
    cost = Number(cost);

    let textInput = +prompt("Enter your text rate:");


    let tax = cost * (textInput / 100);

    let totalCost = tax;

    totalCost = Math.round(totalCost);

    html = '<span style="color: green; font-size: 25px">' + totalCost + '</span>'

    html = 'Your Bill = <span style="font-size: 20px; font-weight: bold">' + cost + '</span><br>Text ' + textInput + '% = <span style="color:red; font-size: 20px; font-weight: bold; ">' + tax.toFixed(2) + '</span><br>Total amount inculding tax = <span style="color: green; font-weight: bold; font-size: 20px">' + totalCost + '</span>';

    document.getElementById('outputResult').innerHTML = html;

    console.log(totalCost);
}


// Input Field

inputText = () => {
    return document.getElementById('inputText').value
}


// Emoji

addEmoji = (param1) => {
    document.getElementById('outputResult').innerHTML += param1;
}

// Clear Input Field

clearInput = () => {
    document.getElementById('inputText').value = ""
}

// Clear Output / Result

clearOutput = () => {
    document.getElementById('outputResult').innerHTML = ""
}