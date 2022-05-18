const listaCPFs = ["12389746512", "32547896321", "547898654723"];


const cliente = {
    nome:"Luis",
    idade: 20,
    cpf:"32165478969", 
    email:"luis@email.com"
}

//console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
//console.log(cliente.cpf.substring(0,3));


const chaves = ["nome", "idade", "cpf", "email"];
//console.log(cliente["nome"]);
//console.log(cliente[chaves[0]]);
chaves.forEach(info=>console.log(cliente[info]));