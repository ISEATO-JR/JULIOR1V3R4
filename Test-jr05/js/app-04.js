const producto = "monitor de 20 pulgadas";              // variable en string
const producto1 = String('monitor de 20 pulgadas');     // convertir en string
const producto2 = new String('monitor de 20 pulgadas');  // variable con asignacion de objeto

// Imprimiendo en consola
// typeof muetra tipo de dato   
console.log(typeof producto);   
console.log(typeof producto1);
console.log(typeof producto2);

// Metodo de String
const producto3 = 'monitor de 20 pulgadas"';  // variable con asignacion de objeto

console.log(producto3);
console.log(producto3.length); // Muestra cantida de lentra en la cadena de texto

// Metodo de busqueda en una cadena de texto
// IndexOf
console.log(producto3.indexOf('20'));

// Includes (true  y false) - Mas moderno
// Ejemplo:
console.log(producto3.includes('20'));
console.log(producto3.includes('pantallasHD'));



