// Construyendo Objeto
const producto = {
    nombreProducto : "Monito 20 pulgadas",
    precio : 300,
    disponible : true
}

// Primera forma de obtener las propiedades del objeto
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//Imprimeindo pantalla
//console.log(precioProducto);
//console.log(nombreProducto);

// Destructing Objeto
// Segunda forma de obtener las propiedades del objeto
const {disponible, nombreProducto} = producto;
console.log(disponible);
console.log(nombreProducto);
