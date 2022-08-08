const keyboard = require('prompt-sync')();

//entrada
let num = Number(keyboard('Valor do jantar: '));

//processamento
const gojeta = 0.10 * num;
const total = num + gojeta;

//saida
console.log(`O valor do gojeta é ${gojeta.toFixed(2)} / O valor total é ${total.toFixed(2)}`);