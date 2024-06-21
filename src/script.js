let display = document.getElementById('display');// Get a reference to the display element by its ID
let currentInput = '';// Initialize a variable to store the current input



// Function to update the display with the current input
function updateDisplay() {
    display.value = currentInput; // Set the value of the display element to the current input
}




// Function to append a number to the current input and update the display
function appendNumber(number) {
    currentInput += number; // Concatenate the number to the current input
    updateDisplay(); // Update the display with the current input
    console.log(currentInput);
}

// Function to append an operator to the current input and update the display
function appendOperator(operator) {
    currentInput += ` ${operator} `; // Concatenate the operator to the current input with spaces for formatting
    updateDisplay(); // Update the display with the current input
    console.log(currentInput);
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Function to calculate the result of the current input and update the display
    function calculateResult() {
        try {
            currentInput = eval(currentInput);// Use eval to evaluate the current input as a mathematical expression
            let result =currentInput;
            console.log(result);
            updateDisplay(); // Update the display with the calculated result
        } catch (error) {
            display.value = 'Error'; // If an error occurs during evaluation, display an error message
        }

    }



