let hoje = new Date();
let fimAno = new Date(hoje.getFullYear(), 11, 31);

let diferenca = fimAno - hoje;

let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

console.log("Faltam", dias, "dias para o fim do ano.");