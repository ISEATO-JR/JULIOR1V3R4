// Objetos

// Variable
const nombreProducto = "Monito 20 pulgadas";
const precio = 300;
const disponible = true;

// Construyendo Objeto
const producto = {
    nombreProducto : "Monito 20 pulgadas",
    precio : 300,
    disponible : true
}

// Imromie todo el contenido del objeto
console.log(producto);

// Imprimir unas de la propiedades del objeto
console.log(producto.nombreProducto);

// Otra opcione de acceder en las propiedades del objeto
console.log(producto["precio"]);


/*-------------------------------------------------*/

// Eliminar o modificar el objeto

// Agregar nueva propiedades
producto.imagen = 'imagen.js';

// Elimanar propiedades
delete producto.disponible;
console.log(producto);