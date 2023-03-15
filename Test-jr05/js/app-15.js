// Aprendiento mas sobre arreglo mas objeto
// Array Methods
//Arreglo Normal o tradicional
const meses = ['Enenro', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agostro','septiembre', 'octubre', 'noviembre', 'diciembre'];

// Agrelo con objetos + propiedades
const carrito = [
    {mouse: 'Mouse Pad Cargador Expert', precio: 111.87},
    {mouse: 'Mouse Inalambrico nekar', precio: 139.24},
    {cd: 'COMPU-CLEAN', precio: 8.52},
    {candado: 'candado Sary', precio: 64.99},
    {ventilado: 'VENTILADOR HAVA', precio : 50.40}
]

// forEach
meses.forEach( function(mes){
    if(mes === 'Febrero'){
        console.log(`EL mes de ${mes} existe`);
    }else{
        console.log('No existe el mes buscado');
    }
});

//Include
// Solo funciona con arreglos planos
const resultado = meses.includes('Marzo');
// console.log(resultado);

/*-------------------------------------------------- */
//Some indeal para arreglo de objeto 
let computo = carrito.some(function(tecnologia){
    return tecnologia.mouse === 'Mouse Inalambrico nekar';
});
// console.log(computo);

/**-------------------------------------------------- */
// Devolver el total del precio de producto de tecnologia

computo = carrito.reduce( function(total,producto){
    return total + producto.precio
},0 );

computo = carrito.filter(function(producto){
    return producto.precio > 100
});

computo = carrito.filter(function(producto){
    return producto.mouse !== 'Mouse Inalambrico nekar'
});
console.log(computo);