// Seleccionamos todas las opciones dentro del contenedor .opciones
const opcionesMenu = document.querySelectorAll('.opciones > div');

opcionesMenu.forEach(opcion => {
    opcion.addEventListener('click', () => {
        // 1. Le quitamos la clase 'activo' a TODAS las opciones
        opcionesMenu.forEach(item => item.classList.remove('activo'));
        // 2. Se la agregamos únicamente a la opción que recibió el clic
        opcion.classList.add('activo');
    });
});