
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

// if else (Check the today)
ifElseBtn = () => {

    let now = new Date();
    let toDay = now.getDay();
    // console.log(toDay)

    if (toDay === 0) {
        showOutput("It's Sunday");
        toastifyIfElse("It's Sunday");
    }
    else if (toDay === 1) {
        showOutput("It's Monday");
        toastifyIfElse("It's Monday");
    }
    else if (toDay === 2) {
        showOutput("It's Tuesday");
        toastifyIfElse("It's Tuesday");
    }
    else if (toDay === 3) {
        showOutput("It's Wednesday");
        toastifyIfElse("It's Wednesday");
    }
    else if (toDay === 4) {
        showOutput("It's Thursday");
        toastifyIfElse("It's Thursday");
    }
    else if (toDay === 5) {
        showOutput("It's Friday");
        toastifyIfElse("It's Friday");
    }
    else {
        showOutput("It's Saturday");
        toastifyIfElse("It's Saturday");
    }
}


// Switch (Check the today)

switchBtn = () => {

    let now = new Date();
    let toDay = now.getDay();
    // console.log(toDay);

    switch (toDay) {
        case 0:
            showOutput("It's Sunday!");
            toastifySwitch("It's Sunday!");

            break;
        case 1:
            showOutput("It's Monday!");
            toastifySwitch("It's Monday!");
            break;
        case 2:
            showOutput("It's Tuesday!");
            toastifySwitch("It's Tuesday!");
            break;
        case 3:
            showOutput("It's Wednesday!");
            toastifySwitch("It's Wednesday!");
            break;
        case 4:
            showOutput("It's Thursday!");
            toastifySwitch("It's Thursday!");
            break;
        case 5:
            showOutput("It's Friday!");
            toastifySwitch("It's Friday!");
            break;

        default:
            showOutput("It's Saturday!");
            toastifySwitch("It's Saturday!");
            break;
    }
}


// For Loop 
for (let i = 0; i <= 3; i++) {
    // console.log(i)
}

// While Loop /* While Loop Work Same As it is For Loop*/
let a = 0;      /* a is loop variable */
while (a <= 3) {
    // console.log(a)
    a++;
}

// Do While Loop
// let i = 5;
// do {
//     console.log(i);
//     I++;
// } while (i >= 3);

// let d = 0;
// do {
//     console.log(d);
//     d++;
// } while (d < 5);

// Hang the System by using Do While Loop
// let i = 0;
// do {
//     console.log(i);
// } while (true);


// Keep Asking the Name
keepAskingTheNameBtn = () => {
    do {
        var name = prompt("Enter Your Name");
        // console.log(name)
        // showOutput(name)
    } while (name === null || name === "" || name.length < 3);

    outputResult.innerHTML = name;
}





// Toastify
// This Toastify Function is used for if else Statement 
toastifyIfElse = (msg) => {

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
toastifySwitch = (msg) => {
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














