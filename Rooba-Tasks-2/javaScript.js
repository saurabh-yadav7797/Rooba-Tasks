// Addition function
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    displayResult(result);
}

// Subtraction function
function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    displayResult(result);
}

// Multiplication function
function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    displayResult(result);
}

// Division function
function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        displayResult('Cannot divide by zero');
    } else {
        const result = num1 / num2;
        displayResult(result);
    }
}

// Modulo function
function modulo() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 % num2;
    displayResult(result);
}

// Display result function
function displayResult(result) {
    document.getElementById('result').innerHTML = `Result: ${result}`;
}
