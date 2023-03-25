// Async Await

// Ejemplo 01
// Forza esta funcion para no bloquear el resto del codigo 
/*
function descargarNuevoCliente(){
    return new Promise( resolve => {
        console.log('Descargando Cliente... espere..');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        },5000);
    });
}

async function app(){
    try {
        const resultado = await descargarNuevoCliente();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();
*/


// Ejemplo 02
/*
setTimeout (function(){
    console.log('Set timeout...Ejemplo 02');
    
},5000);
*/

// Ejemplo 03
/*
setInterval (function(){
    console.log('Set timeout...Ejemplo 03');
},3000);
*/

// Ejemplo 04
function descargarNuevoCliente(){
    return new Promise( resolve => {
        console.log('Descargando Nuevos Cliente... espere..');

        setTimeout( () => {
            resolve('Los clientes Nuevos fueron descargados');
        },5000);
    });
}
function descargaUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando Ultimos Cliente... espere..');

        setTimeout( () => {
            resolve('Los ultimo clientes fueron descargados en resumen');
        },3000);
    });
}
async function app(){
    try {
        //01 - Forma de llamar esta funciones
        // const nuevoCliente = await descargarNuevoCliente();
        // const UltimoCliente = await descargaUltimosPedidos();
        // console.log(nuevoCliente);
        // console.log(UltimoCliente);

        //02 -  Segunda forma de invocarlos
        const resultado = await Promise.all([descargarNuevoCliente(), descargaUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

// Invocando funcion
app();
