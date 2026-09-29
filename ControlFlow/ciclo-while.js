let contador = 0;
while (contador < 5){
    contador++;
}

console.log(contador);


const meta = 1000000;
const ahorroMensual = 150000;
let ahorrado = 0;
let meses = 0;

while (ahorrado < meta){
    ahorrado += ahorroMensual;
    meses++;
}

console.log("Meta alcanzada en", meses ,"meses");
console.log("total ahorrado" , ahorrado);
