import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente = new Cliente();
cliente.nome = "Luis";
cliente.cpf = "11122233309";

const conta1 = new ContaCorrente()
conta1.agencia = 1247;
conta1.cliente = cliente;
conta1.depositar(300)
console.log(conta1);

const conta2 = new ContaCorrente();
conta2.agencia = 1247;

conta1.transferir(100, conta2);

console.log(conta1);
console.log(conta2);



