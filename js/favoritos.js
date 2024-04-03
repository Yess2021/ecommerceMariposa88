// -------------------------------------------
//           Variables Globales
// -------------------------------------------
let listaFavoritos = ['FLORENCIA', 'SOFI'];

// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function representarCardsFavoritos() {

    var cards = ''

    if(listaFavoritos.length) {
        for(var i=0; i<listaFavoritos.length; i++) {
            const producto = productos.find(producto => producto.nombre === listaFavoritos[i])
            cards += '<section class="card-container">'+
                        '<img src="' + producto.foto + '">' +
                        '<button class="favoritosIcon" onclick="agregarFav(' + `'${producto.nombre}'` +')">' + 
                        '<img src="Icons/favorite-checked.svg" />' + 
                        '</button>' +
                        '<h4>' + producto.nombre + '</h4>' +
                        '<p>' + producto.detalles + '</p>' +
                        '<p> $' + producto.precio + '</p>' +
                        '<p> Talles ' + producto.stock + '</p>' +
                        '<p id="colores">' + producto.colores + '</p>' +
                    '</section>'
        }
    }
    else cards += '<h2 class="msg-error">No tienes favoritos para mostrar</h2>'

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
    representarCardsFavoritos()
    console.log("lista actualizada", listaFavoritos)

}


function start() {
    console.warn( document.querySelector('title').innerText )
    representarCardsFavoritos()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
start()

