let anoNascimento = Number(prompt("Ano de nascimento: "));
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

console.log("Você tem", idade, "anos.");