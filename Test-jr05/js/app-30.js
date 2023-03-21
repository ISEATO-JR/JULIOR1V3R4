//  Promises en JavaScript

// Ejemplo 1
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario autenticado'); // El PROMISE se cumple
    }else{
        reject('No pudo iniciar sesion');  // El PROMISE no se cumple
    }

});

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error);
        
    })


    // Forma simplificada con Arrow function
/*
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

*/
console.log(usuarioAutenticado);

// En los Primise existe 3 valores
// Pendding : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir
