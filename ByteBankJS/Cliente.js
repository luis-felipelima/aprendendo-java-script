export class Cliente {
    get cpf(){
        return this._cpf = cpf;
    }

    constructor (nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
} 