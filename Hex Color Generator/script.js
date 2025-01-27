// Get references to DOM elements
const dispalyHexCode = document.querySelector(".hex-code");
const hexGeneratorButton = document.querySelector(".hex-generator");

// Function to generate a random hex color code
const hexCodeGenerator = () => {
    const hexCodeChars = "0123456789abcdef";
    let hexColorCode = "";
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexCodeChars.length);
        hexColorCode += hexCodeChars[randomValue];
    }
    const fullHexCode = `#${hexColorCode}`;
    dispalyHexCode.textContent = fullHexCode; // Update the displayed hex code
    document.body.style.backgroundColor = fullHexCode; // Update the background color
};

// Generate an initial hex color code when the page loads
hexCodeGenerator();

// Add event listener to the button to generate a new hex color code
hexGeneratorButton.addEventListener("click", hexCodeGenerator);

// Add event listener to the hex code display to copy the code to the clipboard
dispalyHexCode.addEventListener("click", function (event) {
    const hexCode = event.target.textContent; // Get the hex code text

    // Create a promise to handle the clipboard operation
    let myPromise = new Promise((resolve, reject) => {
        navigator.clipboard
            .writeText(hexCode)
            .then(() => {
                resolve("Hex code copied to clipboard!");
            })
            .catch((err) => {
                reject("Failed to copy hex code: " + err);
            });
    });

    // Handle the promise result
    myPromise
        .then((message) => {
            console.log(message); // Log success message
            alert(message); // Show a success alert to the user
        })
        .catch((error) => {
            console.error(error); // Log error message
            alert(error); // Show an error alert to the user
        });
});