let number1 = 0;
let operator = '';
let number2 = 0;

let shouldReset = false;
let hasSecondNumber = false;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
        default:
            return "Invalid";
    }
}

function updateDisplay() {
    const display = document.getElementById('result');

    if (operator === '') {
        display.value = number1;
    } else if (!hasSecondNumber) {
        display.value = number1 + ' ' + operator;
    } else {
        display.value = number1 + ' ' + operator + ' ' + number2;
    }
}
function clearDisplay() {
    number1 = 0;
    operator = '';
    number2 = 0;
    updateDisplay();
}

function appendNumber(num) {
    if (shouldReset) {
        number1 = num;
        operator = '';
        number2 = 0;
        shouldReset = false;
        hasSecondNumber = false;
        updateDisplay();
        return;
    }

    if (operator === '') {
        number1 = number1 * 10 + num;
    } else {
        number2 = number2 * 10 + num;
        hasSecondNumber = true; 
    }

    updateDisplay();
}

function setOperator(op) {
    shouldReset = false;

    if (operator !== '' && hasSecondNumber) {
        number1 = operate(operator, number1, number2);
        number2 = 0;                
        hasSecondNumber = false;   
    }

    operator = op;                 
    updateDisplay();
}

function calculate() {
    if (operator !== '' && number2 !== 0) {
        number1 = operate(operator, number1, number2);
        operator = '';
        number2 = 0;
        shouldReset = true; 
        updateDisplay();
    }
}
