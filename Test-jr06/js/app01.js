// Evento en JavaScript

// console.log(1);

window.addEventListener('load',function(){ // load espera a que el JS  y los archivos  que dependan  del HTML  esten listo
    // console.log(2);    
})

window.onload = function(){
    // console.log(3);
    
}

document.addEventListener('DOMContentLoaded', function(){ // Solo espera  por el HTML, pero no espera CSS o imagenes
    // console.log(4);
    
})

// console.log(5);

//Evento scrolling
document.onscroll = function(){
    // console.log('scrolling...!');
}

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('Click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('Enviando formulario');
});

// Evento de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre'); 
const email = document.querySelector('#email'); 
const mensaje = document.querySelector('#mensaje'); 
const formulario = document.querySelector('.formulario');
// input
// change
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de Submit
formulario.addEventListener('submit',function(evento){
evento.preventDefault();

// Validacionde formulario
const {nombre,email, mensaje} = datos;
if(nombre === '' || email=== '' || mensaje === ''){
    mostrarError('Todo los campos son obligatorios');

    return; // Corta la ejecucion del codigo
}

// Enviar la alerta de Enviar Correctamenete
mostrarMensaje('Mensaje enviando correctamente');

// console.log('Enviando formularios');
});

function  leerTexto(e){
   // console.log(e.target.vale);
    // console.log(e.target);
    datos[e.target.id] = e.target.value;
    // console.log(datos)
}

function mostrarAlerta(mensaje,error = null ){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

}

// Muestra una alerta correctamente
function mostrarMensaje(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove()
    },2000);
}

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent= mensaje;
    error.classList.add('error');

    // console.log(error);
    formulario.appendChild(error);

    // Desaparezaca el texto
    setTimeout(() =>{
        error.remove();

    },2000);
}

