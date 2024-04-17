// Get the elements by ID
const colorText = document.getElementById('colorText');
const colorButton = document.getElementById('colorButton');

// Array of colors to cycle through
const colors = ['red', 'green', 'blue', 'purple', 'orange'];

let currentIndex = 0;

// Function to change the color
function changeColor() {
    colorText.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Loop through colors
}

// Add click event listener to the button
colorButton.addEventListener('click', changeColor);
