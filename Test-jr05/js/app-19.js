// Funciones retornando valores
function retornadoFunciones(n1,n2){
    return n1 + n2;
}

// Invocando funcion con una declaracion de una variable
const resultado = retornadoFunciones(2, 6);
console.log(resultado);

/** Funciones avanzados******************************************* */

// Declaracion de varible
let total = 0;

// Funcion 
function agregarCarrito(precio) {
    return total += precio;
}

// Funcion de impuesto
function calcularImpuesto(total){
    return 1.15 * total;
}

// Invocando funcion
total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(500);
total = agregarCarrito(50);
total = agregarCarrito(5600);

// ejecutar funcion - > va sumando los valores que se pase en la funcion
console.log(total);

// Invocando la funcion con una variable
const totalPagar = calcularImpuesto(total);

// Ejecutando variable de la funcion
console.log(totalPagar);