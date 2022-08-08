const keyboard = require('prompt-sync')();

//entrada
let nota1 = Number(keyboard('nota1: '));
let nota2 = Number(keyboard('nota2: '));

//processamento

let Media = (nota1 + nota2) /2;

//saida
console.log(`Media: ${Media.toFixed(1)}`);