
// example 1:
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello javaScript';

// example 2:
// const myChildHeading = document.querySelector('div h1');
// myChildHeading.textContent = 'HTML, CSS, javaScript';



// Supercharging our example website:
// let myImage = document.querySelector("img");
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute("src");
//     if(mySrc === "images/firefox-logo.png"){
//         myImage.setAttribute("src","images/firefox.png");
//     }
//     else {
//         myImage.setAttribute("src","images/firefox-logo.png");
//     }
// }

// Personalized welcome message code.
let myButton = document.querySelector("button");
let myHeading1 = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading1.textContent = "This is from function :" + myName;
 }

 if(!localStorage.getItem("name")) {
    setUserName();
 } else {
    //  This execute , at browser' second load.
    /* "key" may jo previous value hogi (jo k browser k local storage may pari
    hogi), wo print hogi */ 
    let storedName = localStorage.getItem("name");
    myHeading1.textContent = "This is from else : " + storedName;
 }

 myButton.onclick = function() {
    setUserName();
 }