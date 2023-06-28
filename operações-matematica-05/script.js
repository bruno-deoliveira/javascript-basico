//CApturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão. E para cada operação, mostrar um alerta com o resultado.

let firstNumber = prompt('Digite o peimeiro número');
let secondNumber = prompt("Digite o segundo número");
//transformar o resultado da variavel let de string p/ Number
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber

alert('soma: ' + sum)
alert('subtração: ' + sub)
alert('multiplicação: ' + multi)
alert('divisão: ' + div)
alert('resto: ' + restDiv)