const keyboard = require('prompt-sync')();

//entrada
let dia = Number(keyboard('N de dias: '));
let hora = Number(keyboard('N de horas: '));

//processamento
let totalHoras = (dia * 24) + hora;

//saida
console.log(`O total de horas de viagem ${totalHoras}`);