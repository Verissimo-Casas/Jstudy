const keyboard = require('prompt-sync')();

//entrada
const num = Number(keyboard('Digite um numero: '));

//processamento
let antecessor = num - 1;
let sucessor = num + 1;

//saida
console.log(`O antecessor de ${num} é ${antecessor} e o sucessor de ${num} é ${sucessor}`);