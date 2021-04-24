// Funciones para obtener los valores 
var getValue1 = () => parseInt(document.getElementById("input-value1").value);
var getValue2 = () => parseInt(document.getElementById("input-value2").value);

// Funciones de las distintas operaciones
var sum = () => getValue1() + getValue2();
var subtract = () => getValue1() - getValue2();
var multiplication = () => getValue1() * getValue2();
var division = () => getValue1() / getValue2();

// Pintar el resultado correspondiente
var resultSum = () => document.getElementById("result").innerText = sum();
var resultSubtract = () => document.getElementById("result").innerText = subtract();
var resultMultiplication = () => document.getElementById("result").innerText = multiplication();
var resultDivision = () => document.getElementById("result").innerText = division();

// Llamada a la ejecución de la operación correspondiente (eventos)
document.getElementById("button-sum").addEventListener("click", resultSum);
document.getElementById("button-subtract").addEventListener("click", resultSubtract);
document.getElementById("button-multiplication").addEventListener("click", resultMultiplication);
document.getElementById("button-division").addEventListener("click", resultDivision);