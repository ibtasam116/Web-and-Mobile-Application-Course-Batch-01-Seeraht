

// console.log(window)


// Set values in local Storage
setInStorage = () => {

    let names =  localStorage.getItem("users");
    // var names = sessionStorage.getItem('users');
    
    if (names == null) {
        names = []
    }
    else {
        names = JSON.parse(names)
    }

    let newName = prompt("Enter your name.")

    if (!newName) {
        alert("Please Enter Name.")
        return;
    }

    names.push(newName)

    localStorage.setItem('users', JSON.stringify(names))

    outputResult.innerHTML = '<span style="color: green; font-size: 20px">"' + newName + '" </span>Has been stored in Storage.'
    
    // showOutput(newName);
}


// Print item in output / Result from Local Storage
getFromStorage = () => {

    let names = localStorage.getItem('users')
    console.log(names);

    if(!names) {
        toastifyError("There is nothing to print.");
        return;
    }

    names =  JSON.parse(names)
    console.log(names)
    // console.log(JSON.stringify(names))


    outputResult.innerHTML = names;
    // showOutput(names)
}


// Remove item from Local Storage
removeFromStroage = () => {

    localStorage.removeItem("users")

    outputResult.innerHTML = "All Names Have been deleted from storage."

}



// --------------------------------------------------------------------------------------------

// Show Output / Result
showOutput = (outputResult) => {
    document.getElementById('outputResult').innerHTML = outputResult;
}

// Clear Output / Result
clearOutput = () => {
    showOutput('');
    console.log(showOutput);
}

// Emoji 
addEmoji = (param1) => {
    outputResult.innerHTML += '<span style="font-size: 30px">' + param1 + '</span>';
    // showOutput(html);  /* Not Work */
}

// --------------------------------------------------------------------------------------------

// Toastify
// This Toastify Function is used for if else Statement 
toastifyError = (msg) => {

    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// This Toastify Function is used for Switch Statement 
toastifySuccess = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #2193b0, #6dd5ed)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}














