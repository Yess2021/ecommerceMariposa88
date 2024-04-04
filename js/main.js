// -------------------------------------------
//           Variables Globales
// -------------------------------------------

let barraBuscar = document.getElementById('barra-busqueda');
let inputBuscar = document.getElementById('input-busqueda');

// -------------------------------------------
//           Funciones Globales
// -------------------------------------------

function botonSearch() {
    const display = window.getComputedStyle(barraBuscar).getPropertyValue("display");
    console.log(display)
    if (display === 'none') {
        barraBuscar.style.display = 'block';
        inputBuscar.focus()
    } else {
        inputBuscar.value = '';
        barraBuscar.style.display = 'none';
    }
}

function closeSearch() {
    inputBuscar.value = '';
    barraBuscar.style.display = 'none';
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