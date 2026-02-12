const prompt = require('prompt-sync')()
function verificarUsuario() {
    let idade = Number(prompt("Digite sua idade:"));

    if (idade >= 18) {
        console.log("Pode pegar livros e é maior de idade.");
    } else if (idade >= 16) {
        console.log("Pode pegar livros, mas é menor de idade.");
    } else {
        console.log("Não pode pegar livros.");
    }
}

verificarUsuario();