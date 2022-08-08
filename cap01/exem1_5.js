const keyboard = require('prompt-sync')();

//entrada
let num = Number(keyboard('Digite um número: '));
let num2 = Number(keyboard('Digite um número: '));

//processamento
let resultado = num + num2;

//saida
console.log(`O resultado da soma é ${resultado}`);