// Iteradores
// For loop
for(let inicio = 0; inicio <= 10; inicio++){
    // console.log(inicio);
}

//Ejemplo 2
// Numero par
for(let inicio = 0; inicio <= 10; inicio++){
    if(inicio % 2 === 0){
        // console.log(`El numero ${inicio} es par`);
        
    }else {
        // console.log(`El numero ${inicio} es impar`);
        
    }
}

// Ejemplo 3

// Agrelo con objetos + propiedades
const carrito = [
    {nombre: 'Mouse Pad Cargador Expert', precio: 111.87},
    {nombre: 'Mouse Inalambrico nekar', precio: 139.24},
    {nombre: 'COMPU-CLEAN', precio: 8.52},
    {nombre: 'candado Sary', precio: 64.99},
    {nombre: 'VENTILADOR HAVA', precio : 50.40}
]

// for loop
for(let inicio = 0; inicio < carrito.length; inicio++ ){
    // console.log(carrito[inicio].nombre);
}
/**-------------------------------------------------------------- */
// while loop
// ejemplo 1

let inicia = 1;         // Indice
while(inicia < 10){     // Condicion
    // console.log(inicia);
    inicia++;           // Incremento
}

// Numero par y impar
while(inicia <= 100){     // Condicion
    if(inicia % 2 == 0){
    // console.log(`El numero ${inicia} es par`);
    
}else {
    // console.log(`El numero ${inicia} es impar`);
    }
    inicia++;           // Incremento
}

/**----------------------------------------------------------------- */
// do while loop

// Ejemplo 1
let doWhileInicia = 0;

do {
    // console.log(carrito[doWhileInicia].nombre);
    doWhileInicia++;
}while(doWhileInicia < carrito.length);

// Ejemplo 2
// do while se ejecuta solo una ves para revisar la condicion antes de ejecutar
// Numero par y impar
do {
    if(doWhileInicia % 2 == 0){
        console.log(`El numero ${doWhileInicia} es par`);
    }else{
        console.log(`El numero ${doWhileInicia} es impar`);
    }
    doWhileInicia++;
}while(doWhileInicia <= 100);