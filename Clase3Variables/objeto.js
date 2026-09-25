//Objeto: Agrupa datos en pares `clave: valor`, entre llaves. Cada valor se consulta por el nombre de su clave. {}

/*let perfil = {
    nombre: "Jenssen",
    edad: 24,
    ocupacion: "Estudiante",
    fotoPerfil: "url"
};*/

const jugador = {
    nombre: "Kira",
    nivel: 3,
    vidas: 2,
    tieneLlave: false,
    compañero: null,
    inventario: ["Espada", " Poción"],
};

console.log(jugador.nombre);
console.log(jugador.nivel);

jugador.tieneLlave = true;
jugador.vidas = jugador.vidas - 1;
jugador.monedas = 50;
console.log(jugador);

console.log(jugador.inventario[0]);
jugador.inventario.push(" Mapa");
console.log(`${jugador.nombre} tiene ${jugador.inventario.length} objetos`);
console.log(`${jugador.nombre} tiene los siguientes objetos en su inventario: ${jugador.inventario}`);

jugador.inventario.pop()
console.log(`${jugador.nombre} tiene los siguientes objetos en su inventario: ${jugador.inventario}`);

console.log(jugador.puntos);
console.log(jugador.compañero);



