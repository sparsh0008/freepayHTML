// Get the button element
var button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", function () {

    button.classList.add("green");
    button.disabled = true;
    alert("SCAN NEW MEMBERSHIP");
});