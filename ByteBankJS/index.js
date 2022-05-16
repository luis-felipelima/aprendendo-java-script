import{Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import{ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Luis", 11122233309);
const conta1 = new Conta(0, cliente1, 1247); 
const contaPoupanca = new Conta(50, cliente1, 1247);
contaPoupanca.depositar(50);
console.log(conta1);
console.log(contaPoupanca);





