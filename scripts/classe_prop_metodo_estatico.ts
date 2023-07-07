import { BancoDeDados } from "./classes/BancoDeDados";
import { IBancoDeDados } from "./interfaces/IBancoDeDados";

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});

console.log(conexaoBanco);

interface IBancoDeDados {
    ip:string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BancoDeDados {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MYSQL";
    static TIPO_SQLSERVER ="SQL Server";

    constructor(
        private ip: string,
        private usuario: string,
        private tipoBanco: string
    ) {}

    static factory(parametros: IBancoDeDados) {

        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)){
            throw new Error ("Tipo de banco incoreto");
        }

        return new BancoDeDados();
        parametros.ip,
        parametros.usuario,
        parametros.senha,
        parametros.tipoBanco
    };
}