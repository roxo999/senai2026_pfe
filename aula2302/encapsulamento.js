class Pessoa {
    nome; //atributo público
    #cpf = '48372808899'; //atributo privado

    //métodos getter e setter
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }

}

const estudante= new Pessoa();
estudante.nome = 'Ana Clara';//acesso ao atributo publico nome
estudante.setCpf(48372808899);//acesso ao atributo privado cpf
console.log('O cpf é: ' + estudante.getCpf());//acesso ao atributo privado cpf
console.log(estudante.nome);//acesso ao atributo publico nome
