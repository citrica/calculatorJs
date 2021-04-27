// Funciones para obtener los valores de los operandos
var valueA = () => parseInt(document.getElementById("input-value1").value);
var valueB = () => parseInt(document.getElementById("input-value2").value);

// Función para comprobar si los operandos contienen valor vacío
var emptyValue = (valueA, valueB) => {
    if (isNaN(valueA) || isNaN(valueB)) return true;
}

// Función que devuelve mensaje de error
var errorMessage = () => "Error!! All operands must be completed.";

// Funciones de las distintas operaciones con dos operandos de entrada
var sum = (valueA, valueB) => valueA + valueB;
var subtract = (valueA, valueB) => valueA - valueB;
var multiplication = (valueA, valueB) => valueA * valueB;
var division = (valueA, valueB) => valueA / valueB;

// Funciones con condicional
var checkSum = () => {
    if (emptyValue(valueA(), valueB())) {
        return errorMessage();
    } else {
        return sum(valueA(), valueB());
    }
}
var checkSubtract = () => {
    if (emptyValue(valueA(), valueB())) {
        return errorMessage();
    } else {
        return subtract(valueA(), valueB());
    }
}
var checkMultiplication = () => {
    if (emptyValue(valueA(), valueB())) {
        return errorMessage();
    } else {
        return multiplication(valueA(), valueB());
    }
}
var checkDivision = () => {
    if (emptyValue(valueA(), valueB())) {
        return errorMessage();
    } else {
        return division(valueA(), valueB());
    }
}

// Pintar el resultado correspondiente
var resultSum = () => document.getElementById("result").innerText = checkSum();
var resultSubtract = () => document.getElementById("result").innerText = checkSubtract();
var resultMultiplication = () => document.getElementById("result").innerText = checkMultiplication();
var resultDivision = () => document.getElementById("result").innerText = checkDivision();

// Eventos
document.getElementById("button-sum").addEventListener("click", resultSum);
document.getElementById("button-subtract").addEventListener("click", resultSubtract);
document.getElementById("button-multiplication").addEventListener("click", resultMultiplication);
document.getElementById("button-division").addEventListener("click", resultDivision);