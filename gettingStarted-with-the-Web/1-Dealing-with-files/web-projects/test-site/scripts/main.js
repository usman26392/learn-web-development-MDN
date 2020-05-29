
// example 1:
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello javaScript';

// example 2:
const myChildHeading = document.querySelector('div h1');
myChildHeading.textContent = 'HTML, CSS, javaScript';



// Supercharging our example website:

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-logo.png"){
        myImage.setAttribute("src","images/firefox.png");
    }
    else {
        myImage.setAttribute("src","images/firefox-logo.png");
    }
}