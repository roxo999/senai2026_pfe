const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite um numero: '))
let numero2 = Number(prompt('Digite outro numero: '))
let operacao = prompt('Informe sua operação: ')
let resultado

if (operacao === '+') {
  resultado = numero1 + numero2
} else if (operacao === '-') {
  resultado = numero1 - numero2
} else if (operacao === '*') {
  resultado = numero1 * numero2
} else if (operacao === '/') {
  resultado = numero1 / numero2
} else {
  console.log('Operação inválida!')
}

console.log('Resultado:', resultado)
