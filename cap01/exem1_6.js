const keyboard = require('prompt-sync')();

//entrada
let num = Number(keyboard('Digite um número: '));


//processamento
let valorDobro = num * 2;

//saida
console.log(`O dobro de ${num} é ${valorDobro}`);