//! for convencional
//! tres partes
// for(inicio, condición, actualización){
//      bloque de código que se ejectuará si pasa la condición
//}

for(let contador =1; contador <=5; contador++){
    console.log(contador);
}

//Recorrer Arrays
const clientes = ["Pepita", "Juan", "Valentina"];
for(const cliente of clientes){
    console.log("Bienvenidx", cliente);
}

const movimientos = [35000, 120000, 8000, 45000, 60000];
for(const valor of movimientos){
    if (valor > 100000){
        console.log(valor, "Es mayor a 100000");
    }
}