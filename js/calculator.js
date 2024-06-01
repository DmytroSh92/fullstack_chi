let calculatorData = {
    number1: '',
    number2: '',
    operator: ''
};
let isActiveNumber1 = false;
let isActiveNumber2 = false;

document.getElementById('number1').addEventListener('blur', function() {
    calculatorData.number1 = this.value;
    isActiveNumber1 = true;
    isActiveNumber2 = false;
});

document.getElementById('operator').addEventListener('blur', function() {
    calculatorData.operator = this.value;
});

document.getElementById('number2').addEventListener('blur', function() {
    calculatorData.number2 = this.value;
    isActiveNumber1 = false;
    isActiveNumber2 = true;
});

document.getElementById('calculate').addEventListener('click', function() {
    const { number1, number2, operator } = calculatorData;
    if (!number1 || !number2 || !operator) {
        alert('Please enter both numbers and an operator.');
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    alert(`The result is: ${result}`);
});

function appendValue(value) {
        if (isActiveNumber1) {
            const operatorInput = document.getElementById('number1');
            operatorInput.value += value;
            calculatorData.number1 = operatorInput.value;
        } else if (isActiveNumber2) {
            const operatorInput = document.getElementById('number2');
            operatorInput.value += value;
            calculatorData.number2 = operatorInput.value;
        }

}

function setOperator(op) {
    const operatorInput = document.getElementById('operator');
    operatorInput.value = op;
    calculatorData.operator = op;
    isActiveNumber1 = false;
    isActiveNumber2 = false;
}

document.getElementById('set_in_cache').addEventListener('click', function () {
    const firstNumber = document.getElementById('number1');
    const secondNumber = document.getElementById('number2');
    const operator = document.getElementById('operator');

    localStorage.setItem(firstNumber.id, firstNumber.value);
    localStorage.setItem(secondNumber.id, secondNumber.value);
    localStorage.setItem(operator.id, operator.value);
});

document.getElementById('get_from_cache').addEventListener('click', function () {
    console.log(`${localStorage.getItem('number1')} ${localStorage.getItem('operator')} ${localStorage.getItem('number2')}`);
});
