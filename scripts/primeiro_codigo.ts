console.log("Hello World! Este é meu primeiro código TypeScript");

console.log("=================");

const nome = "João";

console.log("Olá " + nome + ". Seja bem-vindo!");

console.log("=================");

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number) {

        this.nome = produtoNome;
        this.valor = produtoValor;

    }

}

const playstation5 = new Produto("Playstation 5", 5000);

console.log("=================");

const elemento = document.querySelector('div');