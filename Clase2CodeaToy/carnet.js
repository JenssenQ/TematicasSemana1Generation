const titulo = "============= CARNÉT GENERATION ============= "
const nombre = "Jenssen Quintero";
const ciudad = "Fusagasugá"
const edad = 24;
const edadMeses = edad * 12;
let tech = true;
const lenguaje = "JavaScript";
const pieDePagina = "============================================";

const mensaje = `${titulo} \n Nombre: ${nombre} \n Ciudad: ${ciudad} \n Edad: ${edad} (${edadMeses} meses) \n Busca su primer empleo tech: ${tech} \n Quiero dominar: ${lenguaje} \n ${pieDePagina}`;
console.log(mensaje);
console.log("Tipos:", typeof nombre, typeof edad, typeof tech);
console.log(`¡Feliz cumpleaños, ${nombre}! \n Ahora tienes ${edad+1}`);