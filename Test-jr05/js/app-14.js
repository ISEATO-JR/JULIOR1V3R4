// Arreglo o Array

// Esto es un arreglo
const numero = [10,20,30,40,50,60,70,80,90,100];
// Impresion tradicional
// console.log( numero);

// Imprecion en tabla en arreglo
// console.table(numero);

// Constructor
const meses = new Array('Enenro', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agostro','septiembre', 'octubre', 'noviembre', 'diciembre');
// console.table(meses);

// Acceder en unos de los elementos dela arreglo
// console.log(meses[2])

// Conocer la extencion de los arreglos
// console.log(meses.length)

// ciclo iterador -> forEach
// meses.forEach(function(mes){
//     console.log(mes);
// });

// Agregar elementos en un arreglo
// Primera forma de modificar un arreglo
meses.push(2023,2024); // Final

// Segunda forma de agregar elemento en una arreglo
meses.unshift(-01,-02,-030);// Inicio

// Eleminar el ultimo elemento
meses.pop();

//Eliminar el primer elemento
meses.shift();

// Eliminar cualquier una de las posiciones del elemento del arreglo
meses.splice(3, 1);
console.table(meses);

// Rest Operator o Spread Operator
// Opcion recomentada hoy en dia 
const nuevoArreglo = [...meses, 'Año']
console.table(nuevoArreglo);
