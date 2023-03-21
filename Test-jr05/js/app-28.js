// Classes 

// Ejemplo 01

// Declaracion de clase
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`
    }
} 

const producto2 = new Producto('Monitor  57"',1000);
const producto3 = new Producto('Bocinas de inalambricas',565);


// Ejemplo 02
// Herencias evita duplicar codigo
class PromoOpcion extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }

}
const producto4 = new PromoOpcion('LICORERA JEBEL', 1800, 'ZKTC 031 O');

console.log(producto2);
console.log(producto3);
console.log(producto4.formatearProducto());