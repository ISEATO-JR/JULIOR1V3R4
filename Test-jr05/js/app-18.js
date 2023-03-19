//  Funciones

// Declaracion de las funciones con parametros 
            /** Parametros | */
function sumar( numero1 = 0,  numero2 = 0) {
    console.log(numero1 * numero2);
}

// Invocando funcion sumar
sumar(10,10); // Argumentos o los valores reales
sumar(1,154); // Argumentos o los valores reales
sumar(1454,10); // Argumentos o los valores reales
sumar(10); // Declarado por medio defaul

// Expresion de la funcion
const sumar2 = function(n1 , n2){
    console.log(n1 + n2);
}

// Invocando funcion 2
// Nota: Siempre mantener las sintaxis punto y coma (;) para evitar error
sumar2(5, 8);