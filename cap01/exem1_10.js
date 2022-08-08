const keyboard = require('prompt-sync')();

//entrada
let num = Number(keyboard('Valor da conta R$: '));
let person = Number(keyboard('Quantas pessoas: '));

//processamento

let Valor = num / person;

//saida
console.log(`O valor por cliente R$ ${Valor.toFixed(2)}`);