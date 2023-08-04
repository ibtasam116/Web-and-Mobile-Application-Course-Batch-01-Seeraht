
// For get complete element by id 
let elements = document.getElementById('para1');
console.log(elements);

// let elements1 = document.getElementById('para1').innerHTML
// console.log(elements1);

// let elements2 = document.getElementById('para1').innerHTML = "Hello Word";
// console.log(elements2);


// ---------------------------------------------------------------

// For get all elements by tag name 
let tag1 = document.getElementsByTagName('p')
console.log(tag1);

// Chacking lenght of the all elements 
let tag2 = document.getElementsByTagName('p')
console.log(tag2.length);

// Passing index in element 
let tag3 = document.getElementsByTagName('p')
console.log(tag3[1]);


// -------------------------------------------------------------

// For get elements by class name
let className = document.getElementsByClassName('abc')
console.log(className);

// Applying Style on this element 
let className1 = document.getElementsByClassName('abc')
console.log(className1[1].style.color = "red");







