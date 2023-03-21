// switch

//Ejemplo
const metodoPago = 'Efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagastes con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario pagara en cheque, revisar los fondo primero');
        break;
    case 'Efectivo':
        console.log('Pagastes con efectivo');
        break;

    default:
        console.log('Aun no has pagado')
        break;
}