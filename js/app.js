// Funciones para obtener los valores de los operandos
var getValueA = () => parseInt(document.getElementById("input-value1").value);
var getValueB = () => parseInt(document.getElementById("input-value2").value);

// Función para comprobar si los operandos contienen algún valor
var checkOperand = (value) => {
    if (isNaN(value)) return true;
}

// Función que devuelve mensaje de error
var errorMessage = () => "Error!! All operands must be completed.";

// Funciones de las distintas operaciones
var sum = () => getValueA() + getValueB();
var subtract = () => getValueA() - getValueB();
var multiplication = () => getValueA() * getValueB();
var division = () => getValueA() / getValueB();

// Funciones de comprobación de operaciones
var checkSum = () => {
    if (!checkOperand(getValueA()) && !checkOperand(getValueB())) {
        return sum();
    } else {
        return errorMessage();
    }
}
var checkSubtract = () => {
    if (!checkOperand(getValueA()) && !checkOperand(getValueB())) {
        return subtract();
    } else {
        return errorMessage();
    }
}
var checkMultiplication = () => {
    if (!checkOperand(getValueA()) && !checkOperand(getValueB())) {
        return multiplication();
    } else {
        return errorMessage();
    }
}
var checkDivision = () => {
    if (!checkOperand(getValueA()) && !checkOperand(getValueB())) {
        return division();
    } else {
        return errorMessage();
    }
}

// Pintar el resultado correspondiente
var resultSum = () => document.getElementById("result").innerText = checkSum();
var resultSubtract = () => document.getElementById("result").innerText = checkSubtract();
var resultMultiplication = () => document.getElementById("result").innerText = checkMultiplication();
var resultDivision = () => document.getElementById("result").innerText = checkDivision();

// Llamada a la ejecución de la operación correspondiente (eventos)
document.getElementById("button-sum").addEventListener("click", resultSum);
document.getElementById("button-subtract").addEventListener("click", resultSubtract);
document.getElementById("button-multiplication").addEventListener("click", resultMultiplication);
document.getElementById("button-division").addEventListener("click", resultDivision);