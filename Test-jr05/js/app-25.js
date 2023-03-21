// forEach

// Ejemplo 1
// Agrelo con objetos + propiedades
const carrito = [
    {nombre: 'Mouse Pad Cargador Expert', precio: 111.87},
    {nombre: 'Mouse Inalambrico nekar', precio: 139.24},
    {nombre: 'COMPU-CLEAN', precio: 8.52},
    {nombre: 'candado Sary', precio: 64.99},
    {nombre: 'VENTILADOR HAVA', precio : 50.40}
];


//forEach
carrito.forEach(function(producto){
    // console.log(producto);
});

// forEach con Arrow Function
// carrito.forEach( producto => console.log(producto));
    



// **********************************************
// map
carrito.map( producto => console.log(producto));