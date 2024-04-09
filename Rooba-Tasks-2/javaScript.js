// Function to get input values
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return [num1, num2];
}

// Addition
function add() {
    const [num1, num2] = getInputValues();
    const result = num1 + num2;
    displayResult(result);
}

// Subtraction
function subtract() {
    const [num1, num2] = getInputValues();
    const result = num1 - num2;
    displayResult(result);
}

// Multiplication
function multiply() {
    const [num1, num2] = getInputValues();
    const result = num1 * num2;
    displayResult(result);
}

// Division
function divide() {
    const [num1, num2] = getInputValues();
    if (num2 === 0) {
        displayResult('Cannot divide by zero');
    } else {
        const result = num1 / num2;
        displayResult(result);
    }
}

// Modulo
function modulo() {
    const [num1, num2] = getInputValues();
    const result = num1 % num2;
    displayResult(result);
}

// Display result
function displayResult(result) {
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('modulo').addEventListener('click', modulo);
