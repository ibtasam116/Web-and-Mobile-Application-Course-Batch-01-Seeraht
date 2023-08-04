


var originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."
document.getElementById('originalTextBox').innerHTML = originalText;

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir']

// console.log(cities)

// -----------------------------------------------------

// Convert to Lower Case 
lowerCase = () => {
    let lowerCaseText = originalText.toLowerCase();

    // let lowerCaseText = document.getElementById('inputText').value;
    //  lowerCaseText= lowerCaseText.toLowerCase();

    document.getElementById('outputResult').innerHTML = lowerCaseText;
}


// Convert to Upper Case 
upperCase = () => {
    let upperCaseText = originalText.toUpperCase();

    // let upperCaseText = document.getElementById('inputText').value;
    // upperCaseText = upperCaseText.toUpperCase();

    document.getElementById('outputResult').innerHTML = upperCaseText;
}


// Convert into Capitalize 
capitalize = () => {

    /* Capitalize by using CSS style method */
    let capitalizeText = '<span style="text-transform: Capitalize;">' + originalText + '</span>';
    document.getElementById('outputResult').innerHTML = capitalizeText;

    /* Capitalize by using .style method */
    // document.getElementById('outputResult').style.textTransform = 'capitalize';
    // document.getElementById('outputResult').innerHTML = originalText;
}

// Brtter Formatting

betterFormatting = () => {
    // Document.getElementById('outputResult').innerHTML = "";

    let text = document.getElementById('inputText').value;

    if (!text) {
        alert('Please Enter Text in Input field');
        return;
    }

    text = text.toLowerCase();

    document.getElementById('outputResult').style.textTransform = "capitalize";
    document.getElementById('outputResult').innerHTML = text;
}


// Print All Cities 
printAllCities = () => {
    document.getElementById('outputResult').innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;

        document.getElementById('outputResult').innerHTML += num + ") " + cities[i] + "<br>";
    }
}

// Add Your City in LIst

addCityInList = () => {
    document.getElementById('outputResult').innerHTML = "";

    let city = document.getElementById('inputText').value;
    if (!city) {
        alert('Please Enter City in Input Field!');
        let html = '<span style="color: red; font-size: 20px;">Please Enter City in Input Field!</span>'
        document.getElementById('outputResult').innerHTML = html;

        return;
    }

    if (city.length < 3) {
        alert('Please type your city name correctly.')
        let html = '<span style="color: red; font-size: 20px;">Please type your city name correctly.</span>'
        document.getElementById('outputResult').innerHTML = html;
        return;
    }

    // let cityFirstLetter = city.slice(0, 1).toUpperCase();
    // console.log(cityFirstLetter);
    // let cityAllLetters = city.slice(1).toLowerCase();
    // console.log(cityAllLetters);
    // return;

    let cityFirstLetter = city.charAt(0).toUpperCase();
    // console.log(cityFirstLetter);
    let cityAllLetters = city.slice(1).toLowerCase();
    // console.log(cityAllLetters);

    let cityInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityInCapitalize) {

            cityFound = true;
            let html = '<span style="color: red; font-size: 20px;">"' + cityInCapitalize + '"</span> is already in list.'
            document.getElementById('outputResult').innerHTML = html;
        }
    }

    if (cityFound === false) {
        cities.push(cityInCapitalize);
        let html = '<span style="color: green; font-size: 20px;">"' + cityInCapitalize + '"</span>' + ' has been successfully added in list.'
        document.getElementById('outputResult').innerHTML = html;
    }
}


// Check City In List
checkCityInList = () => {
    document.getElementById('outputResult').innerHTML = " ";

    let cityName = document.getElementById('inputText').value;

    if (!cityName) {
        alert('Please Enter City Nema in Input Field!');
        let html = '<span style="color: red; font-size: 20px;">Please Enter City Name in Input Field!</span>'
        document.getElementById('outputResult').innerHTML = html;
        return;
    }

    if (cityName.length < 3) {
        alert('Please type your city name correctly.')
        let html = '<span style="color: red; font-size: 20px;">Please type your city name correctly.</span>'
        document.getElementById('outputResult').innerHTML = html;
        return;
    }

    let cityNameFirstLetter = cityName.charAt(0).toUpperCase();
    // console.log(cityNameFirstLetter)
    let cityNameAllLetters = cityName.slice(1).toLowerCase();
    // console.log(cityNameAllLetters)

    let cityInCapitalize = cityNameFirstLetter + cityNameAllLetters;

    let checkCity = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityInCapitalize) {
            checkCity = true

            let html = '<span style="color: green; font-size: 20px;">"' + cityInCapitalize + '"</span>' + ' found in the list &#128151;';

            document.getElementById('outputResult').innerHTML = html;
        }

    }
    if (checkCity === false) {

        let html = "SORRY &#128524 we couldn't find your city <span style='color: red; font-size: 20px;'>" + '"' + cityInCapitalize + '"' + '</span> in list. <br> Click <span style="color: green; font-size: 20px;"> "Add your city in list"</span> to add your city. &#128522';

        document.getElementById('outputResult').innerHTML = html;

    }
}

// Find Word

findWord = () => {
    let neworiginalText = originalText.toLowerCase();

    let word = document.getElementById('inputText').value

    if (!word) {
        alert('Please type a word for find.');

        let html = '<span style="color: red; font-size: 20px"> Please type a word for find. </span>';
        
        document.getElementById('outputResult').innerHTML = html;

        return;
    }

    word = word.toLowerCase();

    let findWord = neworiginalText.indexOf(word);

    if (findWord !== -1) {
    
        let html = 'Your word <span style="color: green; font-size: 20px">" ' + word + ' "</span> found at index: <span style="color: brown; font-size: 20px">" ' + findWord + ' "</span>' + "<br> In Original Text."; 
        document.getElementById('outputResult').innerHTML = html
    }
    else{
        let html = 'Your word <span style="color: red; font-size: 20px">" ' + word + ' "</span> does not exist in original string.'
        document.getElementById('outputResult').innerHTML = html;
    }

}


// Replace Word

replaceWord = () => {

    // let cnic = "33102-5802249-7"

    // let word = "-"

    // let replacewith = ""

    // word = new RegExp(word, "g")

    // let cnicWithOutDashes = cnic.replace(word, replacewith)

    // console.log(cnicWithOutDashes);


    let neworiginalText = originalText.toLowerCase();

    let word = document.getElementById('inputText').value;

    if (!word) {
        alert('Type a word that you want to replace it from original text.')
        let html = '<span style="color: red; font-size: 20px;">Type a word that you want to replace it from original text.</span> '
        document.getElementById('outputResult').innerHTML = html;
        return;
    }

    
    let replaceWith = prompt('Enter a word that you want to replace with')
    
    if (!replaceWith) {
        alert('Please type a word to raplace it with ' + word + ".")
        let html = '<span style="color: red; font-size: 20px;"> Please type a word to raplace it with. </span>' + '<span style="color: green; font-size: 20px;">"' + word + '"</span>.'
        document.getElementById('outputResult').innerHTML = html;
        return;
    }
    
    word = word.toLowerCase();

    word = new RegExp(word, "g")

    replaceWith = replaceWith.toLocaleLowerCase(); 
    let replaceWord = neworiginalText.replace(word, replaceWith);

    document.getElementById('outputResult').innerHTML = replaceWord;
}


// Emoji     /* Using + sign with the = sign for same time one to more emoji */
function addEmoji(param1) {
    document.getElementById('outputResult').innerHTML += "<span style='font-size: 30px'>" + param1 + "</span>";
}


// Clear Input Field

const clearInput = () => {
    document.getElementById('inputText').value = ""
}

// Clear Output Field

const clearOutput = () => {
    document.getElementById('outputResult').innerHTML = ""
}


// // Show Output
// function showOutput(output) {

//     document.getElementById('output').innerHTML = output;
// }
