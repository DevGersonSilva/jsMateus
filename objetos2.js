let carro = {
    portas: 4,
    motor: 2.0
};

let adicionais = {
    tetoSolar: true,
    arcondicionado: true,
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);


let nomes = ["Gerson", "Junior", "Silva"];

for(let i=0; i<=nomes.length; i++){
    console.log(nomes[i]);
}

