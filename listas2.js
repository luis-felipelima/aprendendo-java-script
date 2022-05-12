console.log(`Trabalhando com listas`)

const temPassagemComprada = true;
const idadeComprador = 17;
const estaAcompanhada = true;
const listaDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro` 
);

if(idadeComprador >= 18 || estaAcompanhada == true){
    listaDestinos.splice(0,1);
    console.log("Sua passagem foi comprada");
}
else {
    console.log("Não podemos vender para pessoas menores de idade");
    
}

if(temPassagemComprada == true){
    console.log("Pode embarcar, Boa viagem!")
}else{
    console.log("Você não pode embarcar sem estar com a passagem comprada")
}


console.log(listaDestinos);