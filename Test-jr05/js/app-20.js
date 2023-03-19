// Funcion con Metodo de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion: ${id}`);
    },

    pausar : function(){
        console.log(`Pausando...`);
    },

    crearPlayList : function(nombre) {
        console.log(`Creando el playlist: ${nombre}`);
    },

    reproducirPlayList : function(nombre) {
        console.log(`Reproducioendo el playlist: ${nombre}`);
    }
}

// Declarando una funcion de eliminar
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`);

}
// Invocando funcion y ejecuntando 
console.log(reproductor);

// Accediendo en la propiedad de la funcion
reproductor.reproducir(5656);
reproductor.pausar();

// invocando funcion de borrarCancion();
reproductor.borrarCancion(56);

// invocando la funcion de crear playList();
reproductor.crearPlayList('Enamorado');

//Invocando la funcion de reproducirPlaylist();
reproductor.reproducirPlayList(`Enamorado`);