class Veiculo {

    cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false;
    }

}

const carro = new Veiculo("Branco");

carro.cor = "Preto";

console.log(carro.cor);

console.log(carro.tentarAbrirPorta());