// Get the button element
var button = document.getElementById("btn");

// Add a click event listener to the button
button.addEventListener("click", function () {

    button.classList.add("green");
    button.disabled = true;
    const scannerWindow = window.open('https://qrscaning.netlify.app', 'Scanner', 'width=400,height=400');
    // Listen for messages from the scanner site
    window.addEventListener('message', function(event) {
        // Display the scanned result
        document.getElementById('result').innerText = `Scanned QR Code: ${event.data}`;

        // Close the scanner window
        scannerWindow.close();
    });
    
    button.innerText = "ON-GOING";
});