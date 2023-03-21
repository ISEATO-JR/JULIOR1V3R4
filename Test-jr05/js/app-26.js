// this

// Ejemplo 01
const reservacion = {
    nombre : 'Julio',
    apellido : 'Rivera',
    total : 5000,
    pagado : false,
    infomacion : function(){
        console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar  es ${reservacion.total}`);   
    }
};
// Ejemplo 02
const reservacion2 = {
    nombre : 'Zeus',
    apellido : 'Rivera',
    total : 5000,
    pagado : false,
    infomacion : function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar  es ${this.total}`);   
    }
};

reservacion2.infomacion();