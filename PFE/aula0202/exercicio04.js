//Dado um número, informe se é par ou ímpar.
const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um numero: '));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
} else {
    console.log(`O número ${numero} é ÍMPAR.`);
}
