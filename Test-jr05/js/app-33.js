function obtenerEmpleado(){
    const file = 'empleados.json'
    fetch(file)
        .then(resultado => {
            return resultado.json();
        })
        .then( datos => {
            // console.log(datos);
            const { empleado } = datos;
            // console.log(empleado);
            empleado.forEach(empleados => {
                console.log(empleados.id);
                console.log(empleados.nombre);
                console.log(empleados.puesto);
                document.querySelector('.contenido').textContent = empleados.nombre;
            });
            
        })
}

obtenerEmpleado();