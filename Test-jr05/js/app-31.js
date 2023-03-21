// API de javaScript
const boton =  document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado ${resultado}`));
})

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png',
        body : 'Codigo de Julio Rivera'
    })
}