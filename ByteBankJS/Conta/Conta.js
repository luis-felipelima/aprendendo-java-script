//Classe abstrata
import { Cliente } from "/home/luis/Documentos/aprendendoJavaScript/ByteBankJS/Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta, pois esta é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error("Esse é um metodo abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log("O saque no valor de " + valor +" foi efetuado");
            return valorSacado;
        }
        return 0;
    }


    depositar(valor){
        if(valor < 0){return;}
        this._saldo += valor;
        console.log("Um deposito no valor de " + valor + " foi feito");

    }

    transferir(valor, ContaCorrente){
        this.sacar(valor);
        ContaCorrente.depositar(valor);
    }
}