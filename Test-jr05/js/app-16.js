//  Funciones

// Declaracion de las funciones
function sumar() {
    console.log(10*40);
}

// Invocando funcion sumar
sumar();

// Expresion de la funcion
const sumar2 = function(){
    console.log(6+6)
}

// Invocando funcion 2
// Nota: Siempre mantener las sintaxis punto y coma (;) para evitar error
sumar2();

// IIFE -> Previene acceder en otras variables del proyecto 
// Tercer forma de funcion
// Ejemplo  archivo: otro.js

// (function() {
//     console.log('Esto es una funcion');
// })();

// console.log(variableExterno);

/**----------------------------------------------- */

// Otra forma de declarar funcione

// hosting

sumar3();                       // Se invoca la funcion
function sumar3(){      // Estapa de estructura
    console.log( 5 +9 );        // Ejecucion de la funcion
}

// anonymous o error
sumar4 ();
const sumar4 = function(){
    console.log(45 + 6 );
}