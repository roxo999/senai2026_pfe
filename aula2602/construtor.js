class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
    }
}

const Ana = new Estudante('Ana Clara', 752364, 48372808899);
console.log(Ana);