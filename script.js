let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    display.innerText += operator;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
