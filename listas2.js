console.log(`Trabalhando com listas`)

const idadeComprador = 18;
const listaDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro` 
);

if(idadeComprador >= 18){
    listaDestinos.splice(0,1);
    console.log("Sua passagem foi comprada")
}else {
    console.log("Não podemos vender para pessoas menores de idade")
}

console.log(listaDestinos);