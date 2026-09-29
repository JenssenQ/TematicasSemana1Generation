//! sintaxis básica
//* if (condición){
//*     el bloque de código a ejecutar, si la condición es true
//}

const saldo = 50000;
const monto = 80000;


//* If simple
if (monto > saldo){
    console.log("El monto es mayor al saldo");    
}

//* If else

if (monto <= saldo){
    console.log("Transferencia aceptada");    
} else {
    console.log("Salda insuficiente");
    
}

//* If - else if - else

const saldoAhorros = 250000;

if (saldoAhorros >= 200000){
    console.log("Cliente VIP");
} else if (saldoAhorros >= 100000){
    console.log("Buen ahorro");
} else {
    console.log("Le toca ahorrar");
    
}

const num = 7;
if (num % 2 === 0){
    console.log( num,  "es par");
} else {
    console.log( num, "es impar");
}