// Programacion orientada a objeto

// Ejemplo 01
// // Object Literal
// const producto = {
//     nombre: 'tablet',
//     precio : 500
// }

// Ejemplo 02
// Objeto Constructor
function Producto(nombre, precio, boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.verdadero = true;
}

const producto2 = new Producto('Monitor HP display 57"',1000);
const producto3 = new Producto('Bocinas de inalambricas',565, false);

console.log(producto2);
console.log(producto3);

/**-------------------------------------------------- */

// Crear funciones que solo se utiliza en un objeto en especifico.

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`
}