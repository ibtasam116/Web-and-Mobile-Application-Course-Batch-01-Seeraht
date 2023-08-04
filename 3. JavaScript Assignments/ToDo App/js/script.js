const setTodosInLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
}

const showOutput = (output) => {
    document.getElementById("output").innerHTML = output;
}

const getFieldValue = (fieldId) => {
    return document.getElementById(fieldId).value;
}

const setFieldValue = (fieldId, value) => {
    document.getElementById(fieldId).value = value;
}

const clearOutput = () => {
    document.getElementById('output').innerHTML = "";
}

const emptyFieldValue = () => {
    document.getElementById("title").value = ""
    document.getElementById("location").value = ""
    document.getElementById("description").value = ""
}

const getRandomId = () => {
    return Math.random().toString(36).slice(2)
}

// -------------------------------------------------------------------------------------------


const handleSubmit = () => {
    event.preventDefault();

    let title = getFieldValue("title"), location = getFieldValue("location"), description = getFieldValue("description")

    // let title = getFieldValue("title")
    // let location = getFieldValue("location")
    // let description = getFieldValue("description")

    // let title = document.getElementById('title').value
    // let location = document.getElementById('location').value
    // let description = document.getElementById('description').value

    title = title.trim();
    location = location.trim();
    description = description.trim();

    if (title.lenght < 3 || !title) {
        showNotification("Please enter your title correctly.", "error");
        return;
    }

    if (location.lenght < 3 || !location) {
        showNotification("Please enter your location correctly.", "error");
        return;
    }

    if (description.lenght < 10 || !description) {
        showNotification("Please enter your description correctly.", "error");
        return;
    }

    let todo = { title, location, description }

    todo.id = getRandomId();
    todo.dateCreated = new Date().getTime();
    todo.status = "active";

    // console.log(todo)
    // return;

    // let todos =localStorage.getItem("todos")
    // console.log(todos)
    // return
    // if (todos === null) {
    //     todos = []
    // }else {
    //     JSON.parse(todos)
    // }

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push(todo)                        /* JSON.parse() is used for convert the String in to array & Object */

    localStorage.setItem("todos", JSON.stringify(todos));   /* JSON.stringify() is used to convert the Array & Object into String */

    showNotification("A new todo has been successfully added.", "success")
    showTodos()
    emptyFieldValue()
}

function showTodos() {

    clearOutput()

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (!todos.lenght) {
        // showNotification("There is not a single todo availabe.", "error");
        showOutput("<h5>HURRAY! No task available. Click Add Task button to add your task.</h5>");
        // return;
    }

    let tableStartingCode = '<div class="table-responsive"><table class="table">'
    let tableEndingCode = '</table></div>'

    let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">Title</th><th scope="col">Location</th><th scope="col">Description</th><th scope="col">Actions</th></tr></thead>'


    let tableBody = ''

    for (let i = 0; i < todos.length; i++) {         /* Code By Sir Umair */

        let todo = todos[i]

        tableBody += `<tr><th>${i + 1}</th><td>${todo.title}</td><td>${todo.location}</td><td>${todo.description}</td><td><button class="btn btn-sm btn-info mb-3 mb-md-0" data-value="${todo.id}" onclick="editTodo(event)">Edit</button><button class="btn btn-sm btn-danger ms-2" data-value="${todo.id}" onclick="deleteTodo(event)">Delete</button></td></tr>`
        // tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + todo.title + '</td><td>' + todo.location + '</td><td>' + todo.description + '</td></tr>'
        // tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + todos[i].title + '</td><td>' + todos[i].location + '</td><td>' + todos[i].description + '</td><td>' + todos[i].id + '</td></tr>'
    }

    // for (let i = 0; i < todos.lenght; i++) {         /* Code By Ibtasam */

    //     let todo = todos[i]

    //     tableBody += `<tr><th>${i + 1}</th><td>${todo.title}</td><td>${todo.location}</td><td>${todo.description}</td><td><button class="btn btn-sm btn-info" data-value="${todo.id}" onclick="editTodo(event)">Edit</button><button class="btn btn-sm btn-danger sm-2" data-value="${todo.id}" onclick="deleteTodo(event)">Delete</button>></td></tr>`
    //     // tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + todo[i].title + '</td><td>' + todo[i].location + '</td><td>' + todo[i].description + '</td><td>' + todo[i].id + '</td></tr>'

    // }

    let table = tableStartingCode + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEndingCode

    showOutput(table)
}

// Delete Todo 
const deleteTodo = (event) => {
    let todoId = event.target.getAttribute('data-value')

    // console.log(todoId)
    // return

    const todos = JSON.parse(localStorage.getItem("todos"));

    let todosAfterDelete = todos.filter((todo) => {
        return todo.id !== todoId
    })

    localStorage.setItem("todos", JSON.stringify(todosAfterDelete));
    showNotification("A todo has been successfully deleted", "success");
    showTodos()
    emptyFieldValue()
    document.getElementById("addTaskButton").style.display = "block"
    document.getElementById("updateTaskButton").style.display = "none"


    // console.log(todos)
}

// Update Todo
const editTodo = (event) => {

    let todoId = event.target.getAttribute('data-value')

    const todos = JSON.parse(localStorage.getItem("todos"));

    let todo = todos.find((todo) => {
        return todo.id === todoId
    })

    console.log(todo)
    // return

    const { title, location, description, id, dateCreated, status } = todo

    // const title = todo.title
    // const location = todo.location
    // const description = todo.description

    // console.log(todo)
    console.log(title, location, description, id, dateCreated, status)

    setFieldValue("title", title)
    setFieldValue("location", location)
    setFieldValue("description", description)


    localStorage.setItem("todoForEdit", JSON.stringify(todo))

    document.getElementById("addTaskButton").style.display = "none"
    document.getElementById("updateTaskButton").style.display = "block"
}

const handleEdit = () => {
    const todoForEdit = JSON.parse(localStorage.getItem("todoForEdit"))

    // console.log(todoForEdit)

    let updatedTitle = getFieldValue("title")
    let updatedLocation = getFieldValue("location")
    let updatedDescription = getFieldValue("description")

    const updatedTodo = { todoForEdit, title: updatedTitle, location: updatedLocation, description: updatedDescription }

    updatedTodo.dateModified = new Date().getTime()
    console.log(updatedTodo)
}








// Toastify 
showNotification = (msg, type) => {

    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1f4037, #99f2c8)"
            break;

        case "error":
            bgColor = "linear-gradient(to right, #333333, #dd1818)"
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
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}




// Top Timer
setInterval(displayClock, 500)
function displayClock() {

    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let amPM = "AM";

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    // Switch Satement for days of week 
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
            day = "Thursady";
            break;

        case 5:
            day = "Friday";
            break;

        default:
            day = "Saturday";
            break;
    }

    // Switch Satement for name of month

    switch (month) {
        case 0:
            month = "January";
            break;

        case 1:
            month = "February";
            break;

        case 2:
            month = "March";
            break;

        case 3:
            month = "April";
            break;

        case 4:
            month = "May";
            break;

        case 5:
            month = "June";
            break;

        case 6:
            month = "July";
            break;

        case 7:
            month = "August";
            break;

        case 8:
            month = "Setember";
            break;

        case 9:
            month = "October";
            break;

        case 10:
            month = "November";
            break;

        default:
            month = "December";
            break;

    }

    document.getElementById("time1").innerHTML = day + ', ' + month + ' ' + date + ' ' + year + ', ' + hours + ':' + min + ':' + sec + " " + amPM;
}

// Footer Year
let now = new Date();
let year = now.getFullYear();

document.getElementById('year').innerHTML = year;