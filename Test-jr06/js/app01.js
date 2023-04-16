// Evento en JavaScript

console.log(1);

window.addEventListener('load',function(){ // load espera a que el JS  y los archivos  que dependan  del HTML  esten listo
    console.log(2);    
})

window.onload = function(){
    console.log(3);
    
}

document.addEventListener('DOMContentLoaded', function(){ // Solo espera  por el HTML, pero no espera CSS o imagenes
    console.log(4);
    
})

console.log(5);

//Evento scrolling
document.onscroll = function(){
    console.log('scrolling...!');
    
}
