


getFieldValue = (fieldId) => {
    return document.getElementById(fieldId).value
}

// JavaScript Email regx


getRamdomId = () => {
    return Math.random().toString(36).slice(2)
}





// -------------------------------------------------------------------------

// Global array
var users = [];

// This is a constructor, the name of constructor starts with the capital letter 
function User(firstName, lastName, email, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
}

// Age Calculater 
User.prototype.calculateAge = function () {

    let dob = new Date(this.dob)
    let currentDate = new Date();

    // Calculate month difference from current date in time
    let month_diff = currentDate.getTime() - dob.getTime()

    // Convert the calculate difference in date format
    let age_dt = new Date(month_diff)

    // extract year from date
    let year = age_dt.getFullYear()

    // Now calculate the age of the user
    let age = Math.abs(year - 1970);

    return age;
}


function handleSubmit() {

    event.preventDefault()
    
    // Geting values from input fields
    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let email = getFieldValue("email");
    let dob = getFieldValue("dob");

    // Trim is a method which remove spaceses
    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()

    if (firstName.lenght < 3) {
        showNotification("Please enter your first name correctly", "error")
        return
    }

    if (!emailFormat.test(email)) {
        showNotification("Please enter your email correctly", "error")
        return
    }

    if (!dob) {
        showNotification("Please enter your date of birth correctly", "error")
        return
    }

    let user = new User(firstName, lastName, email, dob)

    user.id = getRamdomId();
    user.dateCreated = new Date().getTime();

    users.push(user)
    showNotification("A new user has been successfully added.", "success")
    showTable()
}

// function showTable() {         /* Code by Sir Umair */

//     if (!users.length) {
//         showNotification("There is not a single user available.", "error");
//         return;
//     }

//     let tableStartingCode = '<div class="table-responsive"><table class="table">'
//     let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">Age</th></tr></thead>'

//     let tableEndingCode = '</table></div>'


//     let tableBody = ''

// for (let i = 0; i < users.length; i++) {
//     tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].calculateAge() + '</td></tr>'
// }

//     let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode

//     showOutput(table)
// }

function showTable() {

    if (!users.length) {
        showNotification("There is no single user available.", "error");
        return;
    }

    let tableStartingCode = '<div class="table-responsive"><table class="table">'

    let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">Age</th></tr></thead>'

    let tableEndingCode = '</table></div>'

    let tableBody = ''

    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].calculateAge() + '</td></tr>'
    }

    /* Error */
    // for (let i = 0; i < users.lenght; i++) {
    //     tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].calculateAge() + '</td></tr>'
    // }

    let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode

    showOutput(table)
}


function printUser() {

    if (!users.length) {
        showNotification("There is not a single user available.", "error");
        return;
    }

    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
    }

    showNotification("New user has been added successfully in console.", "success")

    // console.log(users);
}


// -------------------------------------------------


// Toastify

function showNotification(msg, type) {

    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #00b09b, #96c93d)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        case "emoji":  /* Case for emoji*/
            bgColor = "linear-gradient(to right, #bdc3c7, #2c3e50)"
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
            background: bgColor,
        },
        // onClick: function () { } // Callback after click
    }).showToast();
}


// Add Emoji in OutputResult
addEmoji = (param1) => {
    document.getElementById("outputResult").innerHTML += param1
    // showOutput(param1)
    showNotification("Emoji added in Output / Result ", "emoji")

}

// Show Output 
showOutput = (output) => {
    return document.getElementById('outputResult').innerHTML = output
}

// Clear Output
clearOutput = () => {
    document.getElementById("outputResult").innerHTML = ""
    showNotification("Output / Result box Clear ", "success")
}