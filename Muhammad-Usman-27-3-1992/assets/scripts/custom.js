



let crossBtn = document.querySelector(".left-cross-btn");

let leftPanel = document.querySelector(".col-lg-3");

crossBtn.addEventListener("click",()=> {
    leftPanel.classList.add("hidden");
});