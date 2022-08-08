const keyboard = require('prompt-sync')();

//entrada
let productValue = Number(keyboard('Valor do produto R$: '));


//processamento
let Avista = productValue * 0.10;
let Parcelado = productValue / 3;

//saida
console.log(`O valor a vista R$ ${productValue - Avista.toFixed(2)}`);
console.log(`O valor parcelado 3x R$ ${Parcelado.toFixed(2)}`);