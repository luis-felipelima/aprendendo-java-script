console.log(`\n Trabalhando com listas`)

let temPassagemComprada = false;
const idadeComprador = 17;
const estaAcompanhada = true;
const destino = `São Paulo`;
const listaDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro` 
);
console.log(`\n Destinos possiveis`);
console.log(listaDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;


if(podeComprar && destinoExiste){
    console.log(`Passagem comprada, Boa viagem!`);
}else{
    console.log(`Desculpe, tivemos um erro`);
}


for(let cont =0; cont < 3; cont++){

    if (listaDestinos[contador] == destino){
        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    }
}


console.log(`Destino existe:`, destinoExiste);
