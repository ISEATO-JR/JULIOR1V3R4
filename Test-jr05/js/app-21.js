// Arrow Fution

// Expresion de la funcion
// Las llaves de expresa la funciona puedes dejarlo o quitarlo
// funciona si esta o no 
const sumar = (n1, n2) => {
    console.log(n1 + n2);
}

sumar(5,10);

// Ejemplo uno 
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

// Ejemplo dos
// se puede concervar los parecntesis o quitarlo siempre en cuanto 
// sea una variable de lo contrario no funcionara
// cuando son dos es obligarorio que se mantega los parentesis

/*
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
*/
aprendiendo(`JavaScript`);

/**------------------------------------------------------------------------------------------------- */
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
meses.forEach( mes => {
    if(mes === 'Febrero'){
        console.log(`EL mes de ${mes} existe`);
    }
});

//Include
// Solo funciona con arreglos planos
const resultado = meses.includes('Marzo');
console.log(resultado);
