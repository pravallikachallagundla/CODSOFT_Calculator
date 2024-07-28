let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '' && value === '0') {
        return;
    }
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
