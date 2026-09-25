//Varibales del cliente
let nombre = "Juan";
let ciudad = "Medellín";
let rappiPrime = true;

//Margenes
const margenes = "==========================================================================";
console.log(margenes);


//Saludo
const saludo = `Hola ${nombre}, tu pedido a domicilio en ${ciudad}`;
console.log(saludo);

//Lista de pedido
const pedido = ["Hamburguesa", " Gaseosa", " Poción de papas"];
console.log(`Tu pedido: \n${pedido}`);

//Primer producto de la lista
console.log(`Este es tu primer producto: ${pedido[0]}`);

//Agregando postre
pedido.push(" Helado");
console.log(`Tu pedido con el postre agregado: \n${pedido}`);

//Quitnado ultimo producto agregado
pedido.pop();
console.log(`Se ha eliminado el ultimo producto agregado de tu lista: \n${pedido}`);

//Imprimir cuantos productos tiene la lista en total
console.log(`Tu lista tiene ${pedido.length} productos`);

//Ficha del pedido
const fichaPedido = {
    nombre,
    ciudad,
    rappiPrime,
    pedido,
    estado: "En preparación",
}

 console.log(fichaPedido);
 console.log(fichaPedido.nombre);
 
 fichaPedido.estado = "En camino";
 console.log(fichaPedido);

 //recibo final
 let subtotal = 30000;
 const domicilio = 4000;
 const propina = 0.20;

 const calculoTotal = subtotal + domicilio
 console.log(`Precio a pagar con domicilio y sin propina: $${calculoTotal}`);

 const calcucloPropina= subtotal * propina;
 console.log(`Propina: $${calcucloPropina}`);
 const totalpropina= calculoTotal + calcucloPropina;
 console.log(`Precio a pagar con domicilio y propina: $${totalpropina}`);
 console.log(margenes);