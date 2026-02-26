class Jogador {
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }

    treinar() {
        return '3 vezes na semana';
    }

    getNome() {
        return this.#nome;
    }

    getNumero() {
        return this.#numero;
    }
}

//  FUTEBOL AMERICANO

class JogadorFutebolAmericano extends Jogador {
    #listaJogadas;
    #jardasConquistadas;

    constructor(nome, numero, listaJogadas, jardasConquistadas) {
        super(nome, numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    }

    fazerTouchDown() {
        return "O jogador número " + super.getNumero() + " fez touchdown";
    }

    bloquear() {
        return "O jogador realizou um bloqueio";
    }

    correrJardas(valor) {
        this.#jardasConquistadas += valor;
        return this.#jardasConquistadas;
    }
}

// BASQUETE

class JogadorBasquete extends Jogador {
    #alturaSalto;
    #totalCestas;

    constructor(nome, numero, alturaSalto, totalCestas) {
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    }

    arremessar() {
        return "O jogador " + super.getNome() +
               " e número " + super.getNumero() +
               " arremessou a bola";
    }

    fazerEnterrada() {
        this.#totalCestas++;
        return "Enterrada realizada!";
    }
}


const jogadorFA = new JogadorFutebolAmericano("Octavio", 7, [], 120);
console.log(jogadorFA.fazerTouchDown());

const jogadorBasquete = new JogadorBasquete("Vitor Hugo", 6, 80, 15);
console.log(jogadorBasquete.arremessar());
