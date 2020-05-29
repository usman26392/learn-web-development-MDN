
// Variables:

// let myVariable;
// myVariable = "Bop";
// console.log(myVariable);

// you can do both these operations on the same line if you wish.
// let myVariable = "Bop";

// myVariable = "JavaScript";
// console.log(myVariable);


// javaScript DataTypes:

let variable_1 = "Bob";
let variable_2 = 10;
let variable_3 = true;
let variableArr = [1,"Bob","steve",10];

// Operators:

let no1 = 6;
let no2 = 6;

console.log("Addition:"+(no1+no2));
console.log("Subtraction:"+(no1-no2));
console.log("Multiplication:"+(no1*no2));
console.log("Division:"+(no1/no2));

console.log("Numbers are "+ (no1 === no2));
console.log("Numbers are "+ (no1 && no2));


// Conditionals:
/*
let iceCream = "Chocolate";
if(iceCream === "Chocolate") {
    alert ("Yay, I love chocolate ice cream!");
}
else {
    alert ("Awwww, but chocolate is my favorite...");
}
*/

// Functions:
/*-- Built-in browser functions --*/
let myHeading = document.querySelector("h1");
// alert("JavaScript!");

/* Your own function */
/*--  a simple function which takes two numbers as arguments
and multiplies them --*/

function multiply(num1 , num2) {
    let result = num1 * num2;
    return result;
}

// Here! we are calling a function.
console.log(multiply(5,5));
console.log(multiply(0.5,3));

// Events:
// document.querySelector("html").onclick = function() {
//     alert("You click html element(browser screen)");
// }

// is equivalent to 
let myHTML = document.querySelector("html");
myHTML.onclick = function() {
    alert("You click html element (browser screen)");
}





