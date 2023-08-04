

// Write a js program to find maximum between two numbers.
maxBetweenTwo = () => {

    let num1 = +prompt("Enter first number.")
    if (!num1) {
        alert("Please enter first number.");
        return;
    }

    let num2 = +prompt("Enter second number.")
    if (!num2) {
        alert("Please enter second number.");
        return;
    }
    document.getElementById('output').innerHTML = "Num1 = " + num1 + "<br>";
    document.getElementById('output').innerHTML += "Num2 = " + num2 + "<br>";
    if (num1 < num2) {
        document.getElementById("output").innerHTML += "Num2 greater than Num1.";
    }
    else if (num1 > num2) {
        document.getElementById("output").innerHTML += "Num1 greater than Num2.";
        return;
    }
    else {
        document.getElementById("output").innerHTML += "Numbers are equal.";
    }

}

// Write a program to find maximum between three numbers.
// maxBetweenThree = () => {
//     let num1 = +prompt("Enter first number.");

//     if (!num1) {
//         alert("Please enter first number.");
//         return;
//     }

//     let num2 = +prompt("Enter second number.");

//     if (!num2) {
//         alert("Please enter second number.");
//         return;
//     }

//     let num3 = +prompt("Enter 3rd number/")
//     if (!num3) {
//         alert("Please enter 3rd number.");
//         return;
//     }
//     document.getElementById('output').innerHTML = "Num1 = " + num1 + '<br>';
//     document.getElementById('output').innerHTML += "Num2 = " + num2 + '<br>';
//     document.getElementById('output').innerHTML += "Num3 = " + num3 + '<br>';

//     if (num1 > num2) {
//         document.getElementById('output').innerHTML += "Num1 is greater than Num2 & Num3."
//     }
//     else if (num2 > num3) {
//         document.getElementById('output').innerHTML += "Num2 is greater than Num1 & Num3."
//     }
//     else if (num3 > num1) {
//         document.getElementById('output').innerHTML += "Num3 is greater than Num1 & Num2."
//     }
//     else {
//         document.getElementById('output').innerHTML += "Number are equal."
//     }
// }


maxBetweenThree = () => {
    const num1 = parseFloat(prompt("Enter first number."));
    const num2 = parseFloat(prompt("Enter second number."));
    const num3 = parseFloat(prompt("Enter third number."));
    let max;

    document.getElementById('output').innerHTML = "Num1 = " + num1 + '<br>';
    document.getElementById('output').innerHTML += "Num2 = " + num2 + '<br>';
    document.getElementById('output').innerHTML += "Num3 = " + num3 + '<br>';

    if (num1 >= num2 && num1 >= num3) {
        max = num1;
        document.getElementById('output').innerHTML += "Num1 is greater than Num2 & Num3. <br> Max = " + max;
    }
    else if (num2 >= num1 && num2 >= num3) {
        max = num2
        document.getElementById('output').innerHTML += "Num2 is greater than Num1 & Num3. <br> Max = " + max;
    }
    else {
        max = num3
        document.getElementById('output').innerHTML += "Num3 is greater than Num1 & Num2. <br> Max = " + max;
    }

}


// Write a js program to check whether a number is negative, positive or zero.
checkNum = () => {
    let num = parseFloat(prompt("Enter a number."));

    // if (!num) {
    //     alert("Please Enter a number.")
    //     console.log(num)
    //     return;
    // }

    if (num >= 0) {
        if (num == 0) {
            alert("number is zero.")
        } else {
            alert("number is positive.")
        }
    } else {
        alert("number is negative.")
    }

    /* 2nd Way */
    // if (num > 0) {
    //     alert("number is positive.")
    // } 
    // else if(num === 0) {
    //     alert("number is zero.")
    // }
    // else{
    //     alert("number is negative.")
    // }
}

// Write a js program to check whether a number is divisible by 5 and 11 or not.
divisible = () => {
    let num = parseFloat(prompt("Enter a number."));

    if (num % 5 === 0 && num % 11 === 0) {
        showOutput(num + " is divisible by 5 and 11")
    }
    else {
        showOutput(num + " is not divisible by 5 and 11")
    }
}

// Write a js program to check whether a number is even or odd.
evenOdd = () => {
    let num = parseFloat(prompt("Enter a number."))

    if (num % 2 === 0) {
        showOutput(num + " is even.")
    } else {
        showOutput(num + " is odd.")
    }
}

// Write a js program to check whether a year is leap year or not.
leapYear = () => {
    let year = prompt("Enter year.")

    if ((0 == year % 4) && (0 != year % 100)) {
        showOutput(year + " is a leap year")
    }
    else if (0 == year % 400) {
        showOutput(year + " is a leap year.")
    }
    else {
        showOutput(year + " is not a leap year")
    }
}


// Write a js program to check whether a character is alphabet or not.

alpha = () => {
    let character = prompt("Enter a character.")

    if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
        showOutput('"' + character + '" is a alphabet.')
    } else {
        showOutput('"' + character + '" not a alphabet')
    }

}

// Write a js program to input any alphabet and check whether it is vowel or consonant.
vowel = () => {
    let vowel = prompt("Enter a alphabet.");

    // By If Else
    // if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
    //     showOutput('"' + vowel + '" is a vowel.')
    // }
    // else if (vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U"){
    //     showOutput('"' + vowel + '" is a vowel.')
    // }else{
    //     showOutput('"' + vowel + '" is a constant.')
    // }

    // By Switch 

    switch (vowel) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            showOutput('"' + vowel + '" is vowel.')
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            showOutput('"' + vowel + '" is constant.')
            break;
        default:
            showOutput('"' + vowel + '" is integer.')
            break;
    }
}


// Write a js program to check whether a character is uppercase or lowercase alphabet.
upr = () => {
    let ch = prompt("Enter a character.")         /* ch = 'b' */

    if (ch === ch.toUpperCase()) {           /* ch.toUpperCase() = 'B' */
        showOutput('"' + ch + '" is Upercase Character.')   /* False */
    }
    else if (ch === ch.toLowerCase()) {
        showOutput('"' + ch + '" is a Lowercase Character.')
    }
    else {
        showOutput('"' + ch + '" is integer.')
    }

    // if(ch <= "a" && ch >= "z"){  /* Error! Wrong Code. */ 
    //     showOutput('"' + ch + '" is a Lowercase Character.')
    // }
    // else if (ch <= "A" && ch >= "Z"){
    //     showOutput('"' + ch + '" is Upercase Character.')
    // }else{
    //     showOutput('"' + ch + '" is integer.')
    // }
}

// Write a js program to input week number and print week day.
printWeek = () => {
    let weekNum = prompt("Enter a week number.")

    switch (weekNum) {
        case "0":
            showOutput('Week number is "' + weekNum + '", Week day is Sunday.')
            break;
        case "1":
            showOutput('Week number is "' + weekNum + '", Week day is Monday.')
            break;
        case "2":
            showOutput('Week number is "' + weekNum + '", Week day is Tuesday.')
            break
        case "3":
            showOutput('Week number is "' + weekNum + '", Week day is Wednesday.')
            break;
        case "4":
            showOutput('Week number is "' + weekNum + '", Week day is Thursday.')
            break;
        case "5":
            showOutput('Week number is "' + weekNum + '", Week day is Friday.')
            break;
        case "6":
            showOutput('Week number is "' + weekNum + '", Week day is Saturday.')
            break;
        default:
            showOutput('Week number is "' + weekNum + '", No week day found in this number.')
            break;
    }
}

// Write a js program to input month number and print number of days in that month.
printMonth = () => {
    let monthNum = prompt("Enter month number.")

    switch (monthNum) {
        case "0":
            showOutput('Month number is "' + monthNum + '", Month day is January.')
            break;
        case "1":
            showOutput('Month number is "' + monthNum + '", Month day is Febuary.')
            break;
        case "2":
            showOutput('Month number is "' + monthNum + '", Month day is March.')
            break;
        case "3":
            showOutput('Month number is "' + monthNum + '", Month day is April.')
            break;
        case "4":
            showOutput('Month number is "' + monthNum + '", Month day is May.')
            break;
        case "5":
            showOutput('Month number is "' + monthNum + '", Month day is June.')
            break;
        case "6":
            showOutput('Month number is "' + monthNum + '", Month day is July.')
            break;
        case "7":
            showOutput('Month number is "' + monthNum + '", Month day is August.')
            break;
        case "8":
            showOutput('Month number is "' + monthNum + '", Month day is September.')
            break;
        case "9":
            showOutput('Month number is "' + monthNum + '", Month day is October.')
            break;
        case "10":
            showOutput('Month number is "' + monthNum + '", Month day is Nevember.')
            break;
        case "11":
            showOutput('Month number is "' + monthNum + '", Month day is December.')
            break;
        default:
            showOutput('Month number is "' + monthNum + '", No month day found in this number.')

            break;
    }
}

/* Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
*/

marksOfFiveSubjects = () => {
    // let sub1 = prompt("Enter marks of Physics.")
    // let sub2 = prompt("Enter marks of Chemistry.")
    // let sub3 = prompt("Enter marks of Biology.")
    // let sub4 = prompt("Enter marks of Mathematics.")
    // let sub5 = prompt("Enter marks of Computer.")

    // let sum = (sub1 + sub2 + sub3 + sub4 + sub5) / 5.0;

    // console.log(sum);

    // var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
    // var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

    var Avgmarks = 0;

    for (var i = 0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks / students.length);
    }

    console.log("Average grade: " + (Avgmarks) / students.length);

}






showOutput = (output) => {
    document.getElementById("output").innerHTML = output;
}