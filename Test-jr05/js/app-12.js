"use strict";  // Correr javaScript en modo estricto


// Construyendo Objeto
// Nota: con la palabra reservade const o let en una declaracion de 
// objeto puede modificarse debido que hay opcion de agregar o elimar el objeto


/* En object method

se tiene una referencia que no queremos que se modifique, por lo que tenemos que realizar 
otros metos para que esto no suceda*/
const producto = {
    nombreProducto : "Monito 20 pulgadas",
    precio : 300,
    disponible : true
}

// Agregar nueva propiedades  // .seal 
Object.freeze(producto)  // Conjelar  objeto o prevenir agregar mas propiedades
producto.imagen = 'imagen.js';

console.log(Object.isFrozen(producto));  // Despues de este codigo no se ejecuta el resto del codigo
console.log(producto);
