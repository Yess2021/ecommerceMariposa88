// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function representarCardsProductos() {

    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += '<section class="card-container">'+
                            '<img src="' + productos[i].foto + '">' +
                            '<button class="favoritosIcon" onclick="agregarFav(' + `'${productos[i].nombre}'` +')">' + 
                            '<img src=' + (listaFavoritos.includes(productos[i].nombre) ? '"Icons/favorite-checked.svg"' : '"Icons/favorite.svg"') + ' />' + 
                            '</button>' +
                            '<h4>' + productos[i].nombre + '</h4>' +
                            '<p>' + productos[i].detalles + '</p>' +
                            '<p> $' + productos[i].precio + '</p>' +
                            '<p> Talles ' + productos[i].stock + '</p>' +
                            '<p id="colores">' + productos[i].colores + '</p>' +  
                        '</section>' 
        }
    }
    else cards += '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('.section-cards-container').innerHTML = cards 
}


function agregarFav(nombre) {

    function filtrar(favorito){
        return favorito !== nombre
    }

    console.log(nombre)
    if(!listaFavoritos.includes(nombre)){
        listaFavoritos.push(nombre)
    } else {
        listaFavoritos = listaFavoritos.filter(filtrar)
    }
    representarCardsProductos()
    console.log("lista actualizada", listaFavoritos)
}


function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()

}

// -------------------------------------------
//               Ejecución
// -------------------------------------------
start()