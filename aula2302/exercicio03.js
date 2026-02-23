class Bicicleta {
    #modelo;
    #marca;
    #cor;
    #velocidademaxima;

    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }

    setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }

    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }

    setVelocidademaxima(valor){
        if(valor > 35){
            console.log('Não é possível inserir acima de 35');
        }
        this.#velocidademaxima = valor;
    }
    getVelocidademaxima(){
        return this.#velocidademaxima;
    }
}

const caloi = new Bicicleta();
caloi.setMarca('Caloi')
console.log(caloi.getMarca());
caloi.setCor('Roxo')
console.log(caloi.getCor());
caloi.setModelo('Velox')
console.log(caloi.getModelo());
caloi.setVelocidademaxima(36)
console.log(caloi.getVelocidademaxima());