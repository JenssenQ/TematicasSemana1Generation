// Los Arrays/Arreglos son un colección ordenada de valores guardados en una sola variable. Se escribno con corchetes y separa elementos con comas.

//const nombres = ["Ana", "Pepito", "Juan"];
//console.log(nombres[0]);

const inventario = ["Espada", "Poción", "Mapa"];

console.log(inventario);
console.log(inventario[0]);
console.log(inventario[2]);
console.log(inventario[3]);
console.log(inventario.length);

//Agrega un dato al arreglo
inventario.push("Llave");
console.log(inventario);

//Elimina el ultimo arreglo del arreglo
inventario.pop();
console.log(inventario);

//Reemplaza la posición asignada con un nuevo dato
inventario[1] = "Escudo";
console.log(inventario);

console.log(inventario[10]);




