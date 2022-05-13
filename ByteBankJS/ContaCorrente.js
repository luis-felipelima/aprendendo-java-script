export class ContaCorrente{
    agencia;
    _saldo = 0;
    cliente;
    valorSacado;

    sacar(valor){
        if(this._saldo <= valor){
            console.log("Você não tem saldo suficiente");
            return;
        }
        this._saldo -= valor;
        console.log("O saque no valor de " + valor +" foi efetuado");
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