function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let firstNumber = Number(num1);
    let num2 = document.getElementById('secondNumber').value;
    let secondNumber = Number(num2);

    let result = firstNumber - secondNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}