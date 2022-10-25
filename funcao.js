function imprimir(){
    console.log("Olá Mundo!");
}

imprimir();

function soma(a,b) {
    return a + b;
}

imprimir2();

function soma(a,b) {
    return a * b;
}

console.log(soma(4,2));

console.log(soma(7,3));

let multiplicar = (x,y) => { //arrow_function
    return x*y;
}

console.log(multiplicar(3,5));

function soma(a,b){
    if(a=== undefined || b === undefined){
        console.log("Insira todos os valores");
    }else{
        return a+b;
    }
}

console.log(soma(1));

console.log(soma(1,2));

