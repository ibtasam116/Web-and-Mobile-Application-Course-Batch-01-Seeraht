const users = [
    { name: "Muhammad Ibtasam", city: "Faisalabad", age: "20", email: "ibtasam116@gmail.com", status: "active", id: "12" },
    { name: "Muhammad Umair", city: "Faisalabad", age: "18", email: "umairwelwisher@gmail.com", status: "inactive", id: "123" },
    { name: "Saad Rafiq", city: "Karachi", age: "28", email: "saad45@gmail.com", status: "active", id: "1234" },
    { name: "Numan Ansari", city: "Islamabad", age: "38", email: "ansari87@gmail.com", status: "active", id: "1235" },
    { name: "Muhammad Rizwan", city: "Lahore", age: "23", email: "rizwan232@gmail.com", status: "active", id: "1236" },
    { name: "Hamza Jutt", city: "Faisalabad", age: "21", email: "hamza90@gmail.com", status: "inactive", id: "1237" },
    { name: "Muhammad Ashfaq", city: "Faislabad", age: "39", email: "ashfaq.ptcl@gmail.com", status: "active", id: "1238" },
    { name: "Abbas", city: "Islamabad", age: "31", email: "abbaswellwisher@gmail.com", status: "inactive", id: "1239" },
];

// console.log(users);

/* For Loop */
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

/* For of Loop */
// for (const user of users) {
//     console.log(user)
// }

/* For Get users atributes */
// for (const user of users) {
//     console.log(user.name)
//     console.log(user.id)
//     console.log(user.email)
// }

/* get single user */
// let singleUser = users[0];
// console.log(singleUser)
// console.log(singleUser.name)
// console.log(singleUser.city)
// console.log(singleUser.age)
// console.log(singleUser.email)
// console.log(singleUser.status)
// console.log(singleUser.id)


/* Get key from single obiect */    /* For In Loop */

// let singleUser1 = users[1];
// console.log(singleUser1)
// for (let key in singleUser1) {
//     console.log(key);
// }

/* Get value from key */          /* For In Loop */
// let singleUser2 = users[2];
// console.log(singleUser2)
// for (const key in singleUser1) {
//     console.log(singleUser1[key]);
// }

/* Nested Loop */ /* For of Loop */ /* For In Loop */
// for (let user of users){            /* Of Loop insert in array */ 
//     for(let property in user){      /* In Loop insert in object */ 
//         console.log(property + " => " + user[property])
//     }
// }


// Map Method
const mapMethod = () => {
    let newUsers = users.map((user, index) => {
        return user.age * 2
    })
    showOutput(newUsers)
    // console.log(newUsers)
}


// Filter Method
const filterMethod = () => {
    let filteredUser = users.filter((user, index) => {
        return user.status === "inactive"
    })
    showOutput(filteredUser);
    console.log(filteredUser)
}


// Find Method
const findMethod = () => {
    let findUser = users.find((user, index) => {
        return user.age > 20
    })
    showOutput(findUser)
    console.log(findUser) /* first value which matched with the finder is shown in console */
}

// Find Email
findEmail = () => {
    let email = document.getElementById("email").value

    if (!email) {
        showNotification("Please Enter your email.", "error");
        return;
    }

    let findEmail = users.find((user, index) => {
        return user.email === email;
    })

    if (findEmail === undefined) {
        showNotification("This email not found in DataBase", "error");
    } else {
        showNotification("Email founded in DataBase", "success")
    }

    showOutput(findEmail)
    console.log(findEmail)
}


// ------------------------------------------------------------------------------------

// For Output 
showOutput = (output) => {
    return document.getElementById("OutputResult").innerHTML = output;
}

// Tosatify Notification
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
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Footer Year
let now = new Date();
let year = now.getFullYear();
document.getElementById("year").innerHTML = year + ". "

