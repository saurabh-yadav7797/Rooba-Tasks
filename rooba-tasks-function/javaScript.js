// Function to add two numbers
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    displayResult(result);
}

// Function to subtract two numbers
function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    displayResult(result);
}

// Function to multiply two numbers
function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    displayResult(result);
}

// Function to divide two numbers
function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult("Cannot divide by zero");
    }
}

// Function to display the result
function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}
