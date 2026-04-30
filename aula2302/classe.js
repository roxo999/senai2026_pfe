class Veiculo {
    //atrinutos
    modelo = 'civic g10';
    marca = 'honda';
    ano = 2020;
    preco = 100000;

    //métodos
    mover() { 
        console.log('O veículo está se movendo');
    }
    mostrar(){
        console.log('O modelo do veículo é: ' + this.modelo  + ' ' + this.marca + ' ' + this.ano + ' ' + this.preco);
    }
}

const carro = new Veiculo(); //instancionar a classe = criar o objeto
carro.mover();
carro.mostrar();