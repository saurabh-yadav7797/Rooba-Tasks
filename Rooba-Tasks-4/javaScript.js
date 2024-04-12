// Get the div where we'll display the output
const outputDiv = document.getElementById("output");

// Create an array
const myArray = [1, 2, 3, 4, 5];

// Display the array
outputDiv.innerHTML += "<p>Array: " + myArray.join(", ") + "</p>";

// Calculate the sum of the array
const sum = myArray.reduce((acc, curr) => acc + curr, 0);
outputDiv.innerHTML += "<p>Sum: " + sum + "</p>";

// Calculate the average of the array
const average = sum / myArray.length;
outputDiv.innerHTML += "<p>Average: " + average + "</p>";

// Calculate the maximum and minimum values
const max = Math.max(...myArray);
const min = Math.min(...myArray);
outputDiv.innerHTML += "<p>Max: " + max + "</p>";
outputDiv.innerHTML += "<p>Min: " + min + "</p>";
