// -------------------------------------------
//           Variables Globales
// -------------------------------------------

let inputBuscar = document.getElementById('barra-busqueda');

// -------------------------------------------
//           Funciones Globales
// -------------------------------------------

function botonSearch() {
    if (inputBuscar.style.display === 'none'  ) {
        inputBuscar.style.display = 'block';
    } else {
        inputBuscar.style.display = 'none' ;
    }

}

const overlay = document.getElementById('overlay');

function showMenu() {
    overlay.style.display = 'block';
}

function closeMenu() {
    overlay.style.display = 'none';
}



// -------------------------------------------
//               Ejecución
// -------------------------------------------

window.onload = start