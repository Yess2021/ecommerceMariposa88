// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function agregar(e) {
    e.preventDefault()

    console.log('agregar()')

    // referencias a elementos de entrada por sus IDs
    var refNombre = document.getElementById('nombre')
    var refDetalles = document.getElementById('detalles')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refColores = document.getElementById('colores')
    var refFoto = document.getElementById('foto')

    var nombre = refNombre.value
    var detalles = refDetalles.value
    var precio = +refPrecio.value
    var stock = +refStock.value
    var colores = refColores.value
    var foto = refFoto.value

    var producto = {
        nombre: nombre,
        detalles: detalles,
        precio: precio,
        stock: stock,
        colores: colores,
        foto: foto,     
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    refNombre.value = ''
    refDetalles.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refColores.value = ''
    refFoto.value = '' 
}

function representarTablaProductos() {
    var filasTabla

    if(productos.length) {
        filasTabla = '<tr>' +
                            '<th>nombre</th>' +
                            '<th>detalles</th>' +
                            '<th>precio</th>' +
                            '<th>stock</th>' +
                            '<th>colores</th>' +
                            '<th>foto</th>' +                 
                        '</tr>'

        for(var i=0; i<productos.length; i++) {
            filasTabla += '<tr>' +
                            '<td>'+ productos[i].nombre + '</td>' +
                            '<td>'+ productos[i].detalles + '</td>' +
                            '<td>'+ productos[i].precio + '</td>' +
                            '<td>'+ productos[i].stock + '</td>' +
                            '<td>'+ productos[i].colores + '</td>' +
                            '<td><img width="75" src="'+ productos[i].foto + '" alt="foto de '+ productos[i].nombre +'"></td>' +
                        '</tr>'
        }
    }
    else filasTabla = '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla                    
}

function start() {
    console.warn( document.querySelector('title').innerText )

    var refForm = document.querySelector('main form')
    refForm.onsubmit = agregar

    representarTablaProductos()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
start()