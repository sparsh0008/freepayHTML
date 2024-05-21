// Get the button element
var button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", function () {

    button.classList.add("green");
    button.disabled = true;
    const scannerWindow = window.open('https://qrscaning.netlify.app', 'Scanner', 'width=400,height=400');
    button.innerText = "ON-GOING";
});