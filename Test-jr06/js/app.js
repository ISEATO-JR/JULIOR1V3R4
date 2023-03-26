// Ejemplo 01
// querySelector
// const heading01 = document.querySelector('a');// 0 o 1 Elemento
// console.log(heading01);


// Ejemplo 02
//querySelectoAll
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[1]);
enlaces[0].textContent = 'Nuevo texto';     // Crea nuevo texto para html
enlaces[0].classList.add('nueva-clase');    //  Crea nueva clase
// enlaces[0].classList.remove('navegacion__enlace');    //  Elimina clases

// Ejemplo 03
//getElementByID

// const heading02 = document.getElementById('heading');
// console.log(heading02);

// Crear Nuevos elementos con javascript

const nuevoElemento = document.createElement('A');
console.log(nuevoElemento);
