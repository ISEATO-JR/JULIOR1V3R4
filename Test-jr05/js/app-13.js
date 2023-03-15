// Unir dos objetos

// Objeto 01
const producto = {
    nombreProducto : "Monito 20 pulgadas",
    precio : 300,
    disponible : true
}

// Objeto 02 
const medidas = {
    peso : "1kg",
    medida : "1m"
}

// Unir  objeto 
const nuevoProducto = { ...producto, ...medidas}
console.log(nuevoProducto)