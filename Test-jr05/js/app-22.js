// Estructura de control

// IF
// Operador trimple 
// == o ===
const puntaje = "1000";
if(puntaje === 1000){
// console.log('El puntaje es 1000');
}else {
    // console.log(' No es igual')
}

// Ejemplo 2
const efectivo = 1000;
const carrito = 800;

if(carrito < efectivo){
    console.log('El usuario puede pagar ');
    } else {
        console.log('Fondo insuficiente');
}

// Ejemplo 2
const rol = 'EDITOR';
if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema')
}else if(rol === 'EDITOR'){
    console.log('Eres editor, puedes entra pero ni puedes hacer mucho');
}
else{
    console.log('No tiene acceso');
}