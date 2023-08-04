



// For Creating new element in HTML file using DOM 
var newParagraph = document.createElement("p");
console.log(newParagraph)

// For crating new taxt in HTML file by using DOM
var newTaxt = document.createTextNode("New Append Child Create with DOM.");
console.log(newTaxt)

// Enter newTaxt in the new Element which created by using the DOM
newParagraph.appendChild(newTaxt)

// Add the appended Chid in HTML File

newParagraph.setAttribute("class", "fw-bold")
document.getElementById('abc').appendChild(newParagraph)

let image = document.createElement("img");

image.setAttribute("src", "./image/apple.jpg")
document.getElementById('abc').appendChild(image)










