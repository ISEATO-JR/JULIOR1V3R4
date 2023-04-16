// Asocial evento en un elemento en HTML
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    console.log(evento.preventDefault());

    console.log('Enviando Formulario');
    
});