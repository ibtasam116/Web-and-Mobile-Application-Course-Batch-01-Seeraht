var popupWindow;

console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.hash)


// Where We At
function button1() {

    outputResult.innerHTML = window.location.href;
    showNotification("Output Result Display in Output / Result Box", "success")
}


// Go To Google
button2 = () => {

    window.location.href = "http://google.com";

    showNotification("Page move for Google Page", "success")
}


// Replace URL
button3 = () => {

    window.location.replace("http://calculater_byme.surge.sh")
    // window.location.href = "http://google.com"

    showNotification("URL Replaced", "success")
}


// Open Popup
button4 = () => {

    popupWindow = window.open("", 'my window', "width=420,height=380,left=800,top=100")
    // Detail In This Link. 
    /* https://www.w3schools.com/jsref/met_win_open.asp */
    showNotification("Popup Opened", "success")
}

// Fill Contact In Popup
button5 = () => {

    popupWindow.document.write("<h1>Hello World</h1>")
    showNotification("Contact Placed At Popup Window", "success")
}

// Assign URL To Popup
button6 = () => {
    popupWindow.location.assign("http://techna.pk");
    showNotification("URL Opened in Popup Window", "success")
}

// Close Popup
button7 = () => {
    popupWindow.close();
    showNotification("Popup Closed", "success")
}

// Auto Close Popup
button8 = () => {
    
    popupWindow.location.assign("http://calculater_byme.surge.sh")
    showNotification("Assign URL To Popup", "success")
    
    setTimeout(() => {
        popupWindow.close()
    }, 10000)

    showNotification("Popup Closed After 10 seconds", "error")
}


// ------------------------------------------------------------------
// For Output / Result
showOutput = (output) => {
    return document.getElementById("outputResult").innerHTML = output;
}

// Clear Output / Result
clearOutputResult = () => {
    document.getElementById("outputResult").innerHTML = "";
    showNotification("Ouput Box Cleaned", "error")
}

// Toastify
showNotification = (msg, type) => {

    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #00b09b, #96c93d)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            bgColor = "#000"
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor
        },
        onClick: function () { } // Callback after click
    }).showToast();

}











// ---------------------------------------------------------------------
// Year in Footer element 
let now = new Date();
let year = now.getFullYear();
document.getElementById("year").innerHTML = year;



