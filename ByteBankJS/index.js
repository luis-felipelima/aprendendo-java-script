import{Cliente} from "./Cliente.js";
import{Gerente} from "./Funcionario/Gerente.js";
import{Diretor} from "./Funcionario/Diretor.js";
import{Funcionario} from "./Funcionario/Funcionario.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Pedro", 7000, 98732165428);
const gerente = new Gerente("Otavio", 4500, 32145689700);
gerente.cadastrarSenha("789");
diretor.cadastrarSenha("123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
console.log(diretorEstaLogado, gerenteEstaLogado);
const cliente = new Cliente("Fernanda", 12345678900, "123")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123")
console.log(clienteEstaLogado);




